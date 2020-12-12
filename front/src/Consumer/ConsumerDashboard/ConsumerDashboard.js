import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, ListGroup } from 'react-bootstrap';
import Order from '../../Order/Order';
import { REMOVE_USER } from '../../redux/actionTypes';
import { useHistory } from 'react-router-dom';

export default function ConsumerDashboard() {
   const { user } = useSelector(store => store.auth);

   const dispatch = useDispatch();
   const history = useHistory();

   const onClickHandler = () => {
     dispatch({
        type: REMOVE_USER,
        payload: user,
     });
     history.push('/')
   }

    return (
        <ListGroup variant='flush'>
        <ListGroup.Item>
          <button onClick={() => onClickHandler}>Log Out</button>
        </ListGroup.Item>

        <ListGroup.Item>
          Orders: {user && user.orders.map(el => <Order id={el} />)}
        </ListGroup.Item>

      </ListGroup>
    )
}
