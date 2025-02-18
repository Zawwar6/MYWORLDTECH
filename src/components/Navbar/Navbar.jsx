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
        <li><a href="/about-us" className="navbar-link">About Us</a></li>
        <li><a href="/services" className="navbar-link">Services</a></li>
        <li><a href="/case-study" className="navbar-link">Case Study</a></li>
        <li><a href="/meet-our-team" className="navbar-link">Our Team</a></li>

      </ul>
      <button class="btn-17">
  <span class="text-container">
    <span class="text">
      <a href="/contact">Contact Us</a>
      </span>
  </span>
</button>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
