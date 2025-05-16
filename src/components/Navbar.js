import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.jpg" alt="Little Lemon Logo" />
      </div>
      <div className="navbar-links">
        <a href="#specials">Specials</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
      </div>
    </nav>
  );
};

export default Navbar;


