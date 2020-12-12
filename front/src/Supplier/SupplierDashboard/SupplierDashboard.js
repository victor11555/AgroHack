import React from 'react';
import {useEffect} from 'react'
// import {Form, Button} from 'react-bootstrap';
// import { offerURL } from '../../utils/urls';


export default function SupplierDashboard() {
  const id = localStorage.user_id;
  console.log(id);
  useEffect(() => {
    fetch('http://localhost:4000/supplier', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({id})
    })
      .then(res => res.json())
      .then(supplier => console.log(supplier))
  }, [])
}

  // const formHandler = (e) => {
  //   e.preventDefault();
  //
  //
  //
  //   fetch(`https://localhost:4000/supplier`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type':'Application/json'
  //     },
  //     body: JSON.stringify({id})
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))


  // return(

    // <Form onSubmit={formHandler}>
    //   <Form.Group controlId="formBasicCompany" >
    //     <Form.Control type= "text" placeholder="Add company" />
    //   </Form.Group>
    //   <Form.Group controlId="formBasicTelephone" >
    //     <Form.Control type= "tel" placeholder="Add telephone" />
    //   </Form.Group>
    //   <Form.Group controlId="formBasicAddress">
    //     <Form.Control type="text" placeholder="Add an address" />
    //   </Form.Group>
    //   <Form.Group controlId="descriptionOffer">
    //     <Form.Label>Description</Form.Label>
    //     <Form.Control as="textarea" rows={3} />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //       Set offer
    //   </Button>
    // </Form>
  // )
// }}

