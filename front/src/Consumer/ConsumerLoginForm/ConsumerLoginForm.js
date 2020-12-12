import React from 'react'
import { Button, Form } from 'react-bootstrap';

export default function ConsumerLoginForm() {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.children[0].children[1].value;
    const password = e.target.children[1].children[1].value;

    fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-type':'Application/json'
      },
      body: JSON.stringify({ email, password, role: 'consumer'})
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

