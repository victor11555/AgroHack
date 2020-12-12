import React from 'react'
import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default function SupplierDashboard(){


  const formHandler = (e) => {
    e.preventDefault();
    const userName = e.target.children[0].children[1].value;
    const email = e.target.children[1].children[1].value;
    const password = e.target.children[2].children[1].value;
    const telephone = e.target.children[3].children[1].value;
    const address = e.target.children[4].children[1].value;

    fetch('http://localhost:4000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-type':'Application/json'
      },
      body: JSON.stringify({userName, email, password, telephone, address, role: 'consumer'})
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return(
    <Form onSubmit={formHandler}>
      <Form.Group controlId="formBasicOfferCompany">
          <Form.Control placeholder="Add offer" />
      </Form.Group>
      <Form.Group controlId="formBasicCompany">
          <Form.Control placeholder="Add company" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Add an address" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select type of orders</Form.Label>
        <Form.Control as="select">
          <option>value1</option>
          <option>value2</option>
          <option>value3</option>
          <option>value4</option>
          <option>value5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

