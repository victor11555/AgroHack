import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";
 import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SHOW_PROPOSALS } from '../redux/actionTypes';
import { mainURL } from '../utils/urls';


export default function GetMap(){
  const dispatch = useDispatch();

  let tmp = 0;
  useEffect(()=>{
    fetch(mainURL)
      .then(res => res.json())
      .then(data => {
        tmp = 1;
        dispatch({ type: SHOW_PROPOSALS, payload: data.offers })
      })
  }, [tmp])

  const store = useSelector((store)=> store.proposals);
  const curPos = useSelector((store)=> store.userPosition);
  let addresses = [];
  if (store[0] && curPos.userPosition) {
    addresses.push([curPos.userPosition.latitude, curPos.userPosition.longitude])
    const curOffers = store[0].mapOffer;
    curOffers.forEach((el) => {
      addresses.push(el.address)
    });
  }
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
            {addresses &&
            addresses.map((placemark, i) => (
              <Placemark key={placemark._id} geometry={[...placemark]} />
            ))}
          </Map>
        </YMaps>
      </div>
    </>
  );
}
