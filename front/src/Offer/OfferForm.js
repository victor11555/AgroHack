import React from 'react';
import { Form } from 'react-bootstrap';
import { addOfferURL } from '../utils/urls';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHENTICATE_USER } from '../redux/actionTypes';

export default function OfferForm() {

  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    const title = e.target.children[0].children[0].value;
    const supplier = user._id;
    const address = e.target.children[1].children[0].value.split(' ');
    const description = e.target.children[2].children[0].value;
    fetch(addOfferURL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({ title, supplier, address, description }),
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
        <Form.Control type='text' placeholder='Add an title of offer' />
      </Form.Group>
      <Form.Group controlId='formBasicAddress'>
        <Form.Control type='text' placeholder='Add an address' />
      </Form.Group>
      <Form.Group controlId='descriptionOffer'>
        <Form.Control as='textarea' rows={3} />
      </Form.Group>
      <button variant='primary' type='submit'>Set offer</button>
    </Form>
  );
}
