import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </>
  );
}

export default NavBar;