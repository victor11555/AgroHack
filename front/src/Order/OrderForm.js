import React from 'react';
import { Form } from 'react-bootstrap';
import { addOrderURL } from '../utils/urls';
import { AUTHENTICATE_USER } from '../redux/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

export default function OrderForm({ offerId }) {

  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    const title = e.target.children[0].children[0].value;
    const supplier = user._id;
    const count = e.target.children[1].children[0].value;
    const address = e.target.children[2].children[0].value.split(' ');
    const description = e.target.children[3].children[0].value;
    const price = e.target.children[4].children[0].value;
    fetch(addOrderURL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({ title, count, address, description, price, offerId, supplier }),
    })
      .then(res => res.json())
      .then(response => {
          if (!response.success) console.log(response.message);
          else {
            const { user } = response;
            localStorage.setItem('user_id', user._id.toString());
            dispatch({
              type: AUTHENTICATE_USER,
              payload: user,
            });
          }
        },
      );
  };

  return (
    <Form onSubmit={formHandler}>
      <Form.Group controlId='formBasicTitle'>
        <Form.Control type='text' placeholder='Add an title of order' />
      </Form.Group>
      <Form.Group controlId='formBasicCount'>
        <Form.Control type='number' placeholder='Add an count' />
      </Form.Group>
      <Form.Group controlId='formBasicAddress'>
        <Form.Control type='text' placeholder='Add an address' />
      </Form.Group>
      <Form.Group controlId='descriptionOffer'>
        <Form.Control as='textarea' rows={3} />
      </Form.Group>
      <Form.Group controlId='priceOrder'>
        <Form.Control type='number' placeholder='Add a price' />
      </Form.Group>
      <button variant='primary' type='submit'>Set order</button>
    </Form>
  );
}
