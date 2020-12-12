import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Tabs, Tab, ListGroup, Dropdown} from 'react-bootstrap';
import Offer from '../../Offer/Offer';
import OfferForm from '../../Offer/OfferForm';
import OrderForm from '../../Order/OrderForm';

export default function SupplierDashboard() {
  const [stateOffer,setStateOffer] = useState(false)
  const [stateOrder,setStateOrder] = useState(false)
  const { user } = useSelector(store => store.auth);

  return (
    <div>
      {/*Показывает профиль*/}
      <h3>My Profile</h3>
      <ListGroup variant="flush">
        <ListGroup.Item>Username: {user.username}</ListGroup.Item>
        <ListGroup.Item>Company: {user.company}</ListGroup.Item>
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        <ListGroup.Item>Telephone: {user.telephone}</ListGroup.Item>

        <ListGroup.Item>
          {user.offers.map(el=> (
          <>
            <Offer id={el}/>
            <button onClick={() => setStateOrder(!stateOrder)}>Edit & ADD ORDERS </button>
            {stateOrder ? <OrderForm offerId={el}/> : null}
          </>
        )) }
        </ListGroup.Item>

        <ListGroup.Item>
          <button onClick={() => setStateOffer(!stateOffer)}>ADD Offer</button>
          {stateOffer ? <OfferForm/> : null}
        </ListGroup.Item>

        </ListGroup>
    </div>
  )
}
