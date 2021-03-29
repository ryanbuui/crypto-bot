import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../context/AuthContext';

function Navbar() {

  const {loggedIn} = useContext(AuthContext);
  console.log(loggedIn);

  return (
    <div>
      <Link to="/">Home</Link>
      {
        loggedIn === false && 
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
      }
      {
        loggedIn === true && <Link to="/crypto">Crypto</Link>
      }
    </div>
  )
}

export default Navbar;