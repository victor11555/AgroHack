import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavBar() {

  const ourStyle ={color: 'white'}
  return (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/main">Agro App</Navbar.Brand>
    <Nav className="mr-auto">
      <Link style={ourStyle} to="/login">Log In</Link>
      <Link style={ourStyle} to="/signup">Sign Up</Link>
      <Link style={ourStyle} to="/dashboard">Dashboard</Link>
    </Nav>
  </Navbar>
  );
}

export default NavBar;
