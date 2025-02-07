import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure you have the styles in a separate CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/finalLogo.png" alt="MyWorldTec Logo" />
        </Link>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/" className="navbar-link">Home</a></li>
        <li><a href="/about" className="navbar-link">About Us</a></li>
        <li><a href="/services" className="navbar-link">Services</a></li>

      </ul>
      <li className="contact-button">
        <a href="/contact" className="button">Contact Us</a>
      </li>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
