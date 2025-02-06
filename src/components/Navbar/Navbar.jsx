import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/finalLogo.png" alt="Logo" className="logo" />
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/" className="navbar-link">Home</a></li>
        <li><a href="/about" className="navbar-link">About Us</a></li>
        <li><a href="/services" className="navbar-link">Services</a></li>
      </ul>
        <li><a href="/contact" className="button">Contact</a></li> 
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
