import React, { useEffect, useState } from 'react';
import { orderURL } from '../utils/urls';
import { ListGroup } from 'react-bootstrap';

export default function Order({ id }) {
  const [order, setOrder] = useState(null);

  const url = `${orderURL}/${id}`;
  let tmp = 0;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(response => {
        setOrder(response.order);
        tmp = 1;
      });
  }, [tmp]);

  const ourStyle = {
    border: 'solid 1px black',
    width: '300px',
  };

  return (
    <ListGroup style={ourStyle} variant='flush'>
      <ListGroup.Item>Title: {order && order.title}</ListGroup.Item>
      <ListGroup.Item>Description: {order && order.description}</ListGroup.Item>
      <ListGroup.Item>Count: {order && order.count}</ListGroup.Item>
      <ListGroup.Item>Price: {order && order.price}</ListGroup.Item>
      <ListGroup.Item>Address: {order && order.address}</ListGroup.Item>
      <ListGroup.Item>
        <button>Buy</button>
      </ListGroup.Item>
    </ListGroup>
  );
}

