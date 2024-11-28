import React from 'react';
import logo from 'C:/Users/Hi/Desktop/Coffee-Treat/coffee-treat/src/assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="topnav">
      <a href="#home" className="logo">
        <img src={logo} alt="Coffee-Treat Logo" />
      </a>
      <div className="nav-links">
        <a className="active" href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
        <a href="#help" className="split">Help</a>
      </div>
    </div>
  );
};

export default Navbar;
