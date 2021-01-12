import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { SHOW_PROPOSALS } from '../redux/actionTypes';
import { mainURL } from '../utils/urls';
import Order from '../Order/Order';

function getDistance(lat1, lon1, lat2, lon2) {
  let R = 6371;
  let dLat = deg2rad(lat2 - lat1);
  let dLon = deg2rad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  ;
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default function GetMap() {
  const dispatch = useDispatch();

  let tmp = 0;
  useEffect(() => {
    fetch(mainURL)
      .then(res => res.json())
      .then(data => {
        tmp = 1;
        dispatch({ type: SHOW_PROPOSALS, payload: data.offers });
      });
  }, [tmp]);

  const store = useSelector((store) => store.proposals);
  const curPos = useSelector((store) => store.userPosition);
  let addresses = [];
  let radius = 2000;
  let curLat, curLong;
  if (store[0] && curPos.userPosition) {
    curLat = curPos.userPosition.latitude;
    curLong = curPos.userPosition.longitude;
    const curOffers = store[0].mapOffer;
    curOffers.forEach((el) => {
      if (radius > getDistance(curLat, curLong, el.address[0], el.address[1])) {
        addresses.push(el);
      }
    });
  }
  const ourStyle = {
    display: 'flex',
    maxWidth: '100vh',
    flexFlow: 'row wrap',
  };

  const [curOrders, setCurOrders] = useState(null);
  return (
    <>
      <div>
        <YMaps>
          <Map
            defaultState={{
              center: [55.751574, 37.573856],
              zoom: 5,
            }}
          >
            <Placemark key={curLat * Math.random()} geometry={[curLat, curLong]} />

            {addresses &&
            addresses.map((placemark) => (
              <Placemark key={placemark.address[0] * Math.random()} geometry={[...placemark.address]}
                         onClick={() => {
                           setCurOrders([...placemark.orders]);
                         }} />
            ))}
          </Map>
        </YMaps>
      </div>

      <div className={'container'} style={ourStyle}>
        {curOrders ? curOrders.map(el => <Order key={el} id={el} />)
          : <div>No Orders Here</div>}
      </div>
    </>
  );
}
