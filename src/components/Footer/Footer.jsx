import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    
    <footer className="footer"> 
      <div className="container">
      <motion.h1 
          className="footer-heading"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          MYWORLDTEC
        </motion.h1>
        <br />
        <div className="footer-grid">
        <div className="footer-location">
            <h5 className="footer-title">Our Location</h5>
            <div className="location-wrapper">
              <img src="/Usa.jpeg" alt="USA Map" className="location-image" />
              <p className="location-text">US Branch</p>
            </div>
            <p className="footer-info">Located: Washington, D.C.</p> <br />
          </div>
          
          <div className="footer-contacts">
            <h5 className="footer-title">Contacts</h5>
            <p className="footer-info">Email: <a href="support@myworldtec.com" className="footer-link">support@myworldtec.com</a></p>
            {/* <p className="footer-info">Phone: <a href="00000000000" className="footer-link">00000000000</a></p> */}
          </div>
          
          <div className="footer-links">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links-list"> 
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about-us" className="footer-link">About Us</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-social">
  <a href="https://www.facebook.com/share/1A9FswAqCy/" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaFacebook /></a>
  <a href="https://www.instagram.com/myworldtec786?igsh=MTAzYjNyN2tnY3Zv" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaInstagram /></a>
  <a href="https://www.youtube.com/@MyWorldTech-j9m" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaYoutube /></a>
  <a href="https://www.linkedin.com/company/myworldtec/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FaLinkedin /></a>
</div> <br />
      <p className="footer-rights">© 2022 MyWorldTec. All Rights Reserved.</p>
    </footer>
   
  );
};

export default Footer;