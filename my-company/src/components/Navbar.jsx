import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const navbarStyle = {
    backgroundColor: '#2c3e50',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  };
  const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  };
  return ( 
    <nav style={{navbarStyle}}>
      <Link to="/About" style={linkStyle}>About</Link>
      <Link to="/Contact" style={linkStyle}>Contact</Link>
      <Link to="/Home" style={linkStyle}>Home</Link>
      <Link to="/Services" style={linkStyle}>Services</Link>
    </nav>
   );
}

export default NavBar;