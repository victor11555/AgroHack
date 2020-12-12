import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </>
  );
}

export default NavBar;
