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

  return (
    <>
      <ListGroup variant='flush'>
        <ListGroup.Item>Title: {offer && offer.title}</ListGroup.Item>
        <ListGroup.Item>Description: {offer && offer.description}</ListGroup.Item>
        <ListGroup.Item>Address: {offer && offer.address}</ListGroup.Item>
        <ListGroup.Item>Orders: {offer && offer.orders.map(el => <Order key={el} id={el} />)}</ListGroup.Item>
      </ListGroup>
    </>
  );
}
