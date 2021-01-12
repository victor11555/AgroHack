import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Offer from '../../Offer/Offer';
import OfferForm from '../../Offer/OfferForm';
import OrderForm from '../../Order/OrderForm';
import { REMOVE_USER } from '../../redux/actionTypes';
import { useHistory } from 'react-router-dom';

export default function SupplierDashboard() {
  const [stateOffer, setStateOffer] = useState(false);
  const [stateOrder, setStateOrder] = useState(false);
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickHandler = () => {
    dispatch({
      type: REMOVE_USER,
      payload: user,
    });
    history.push('/');
  };

  return (
    <div>
      {/*Показывает профиль*/}
      <h3>My Profile</h3>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <button onClick={onClickHandler}>Log Out</button>
        </ListGroup.Item>

        <ListGroup.Item>Username: {user.username}</ListGroup.Item>
        <ListGroup.Item>Company: {user.company}</ListGroup.Item>
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        <ListGroup.Item>Telephone: {user.telephone}</ListGroup.Item>

        <ListGroup.Item>
          {user.offers.map(el => (
            <>
              <Offer id={el} />
              <button onClick={() => setStateOrder(!stateOrder)}>Edit & ADD ORDERS</button>
              {stateOrder ? <OrderForm key={el} offerId={el} /> : null}
            </>
          ))}
        </ListGroup.Item>

        <ListGroup.Item>
          <button onClick={() => setStateOffer(!stateOffer)}>ADD Offer</button>
          {stateOffer ? <OfferForm /> : null}
        </ListGroup.Item>

      </ListGroup>
    </div>
  );
}
