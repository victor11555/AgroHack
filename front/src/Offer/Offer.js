import React, { useEffect, useState } from 'react';
import { offerURL } from '../utils/urls';
import { ListGroup } from 'react-bootstrap';
import Order from '../Order/Order';
import { useSelector } from 'react-redux';

export default function Offer({ id }) {
  const [offer, setOffer] = useState(null);

  const url = `${offerURL}/${id}`;
  let tmp = 0;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(response => {
        setOffer(response.offer)
        tmp = 1;
      })
  }, [tmp])

  const ourStyle = {
    display: 'flex',
    maxWidth: '100vh',
    flexFlow: 'row wrap',
  }

  return (
    <>
      <ListGroup variant='flush'>
        <ListGroup.Item>Title: {offer && offer.title}</ListGroup.Item>
        <ListGroup.Item>Description: {offer && offer.description}</ListGroup.Item>
        <ListGroup.Item>Address: {offer && offer.address}</ListGroup.Item>
        <ListGroup.Item className={'container'} style={ourStyle}>{offer && offer.orders.map(el => <Order key={el} id={el} />)}</ListGroup.Item>
      </ListGroup>
    </>
  );
}
