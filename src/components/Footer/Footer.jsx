import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showText, setShowText] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowText(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      {/* Big Animated Heading */}
      <motion.h1
        className="big-heading"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={showText ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        MyWorldTec
      </motion.h1>

      {/* Footer Content - Navigation & Social Icons */}
      <div className="footer-content">
        {/* Left Side: Navigation Links */}
        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Side: Social Icons */}
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
          <a href="#twitter" className="social-icon">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p>&copy; 2024 MyWorldTec. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
