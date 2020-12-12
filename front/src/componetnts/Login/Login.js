// import React from 'react';
// import { Button, Form } from 'react-bootstrap';
//
// const Login = () => {
//   return (
//     <>
//       <Form>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>
//
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

import React from 'react'
import { useHistory } from 'react-router-dom';

function Login(props) {
  const history = useHistory()
  // Если user существует, то перекидываем на главную страницу
  if(props.user){
    // Если мы залогинились, и пытаемся в link снова нажать на Login(см. Ap.js Link),
    // то мы не сможем зайти, потому что user уже существует
    history.push('/')
  }

  return (
    <button onClick={() => props.setUser(state => !state)}>login</button>
  )
}
//
// export default Login;





export default Login;
