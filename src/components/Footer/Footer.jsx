import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"; // Importing Icons

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 MyWorldTec. All rights reserved.</p>
      <div className="social-links">
        <a href="#linkedin" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="#facebook" className="social-icon">
          <FaFacebook />
        </a>
        <a href="#instagram" className="social-icon">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
