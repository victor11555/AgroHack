import React from 'react';
import { useSelector } from 'react-redux';
import {Tabs, Tab, ListGroup, Dropdown} from 'react-bootstrap'



export default function SupplierDashboard() {

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
          {/*показывает названия предложений компаний*/}
          <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            My Offers
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/offers/">{user.offers[0]}</Dropdown.Item>
            <Dropdown.Item href="/offers">{user.offers[1]}</Dropdown.Item>
            <Dropdown.Item href="/offers/">{user.offers[2]}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </ListGroup.Item>
      </ListGroup>

      {/*кнопки отправки на добавления заказа или предложения*/}
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="AddOffer" title="">
          {/*<Offer />*/}
        </Tab>
      </Tabs>
    </div>)
}


