import React from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, ListGroup } from 'react-bootstrap';
import Order from '../../Order/Order';

export default function ConsumerDashboard() {
   const { user } = useSelector(store => store.auth)

    return (
      <ListGroup variant='flush'>
        <ListGroup.Item>Orders: {user && user.orders.map(el => <Order id={el} />)}</ListGroup.Item>
      </ListGroup>
    )
}
