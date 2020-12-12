import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </>
  );
}

export default NavBar;
