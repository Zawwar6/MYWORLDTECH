import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="our-work-container">
      <h1>Our Work</h1>
      <p>Explore our recent projects and see how we can help your business grow!</p>

      <div className="projects">
        {/* Project 1 */}
        <motion.div 
          className="project-card" 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <video width="100%" autoPlay muted loop>
            <source src="/Portfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3> <a href="https://www.786cosmetics.pk" target="_blank" rel="noopener noreferrer">786</a></h3>
          <p>We helped clients with modern, high-performance websites that are optimized for speed and user experience.</p>
         
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          className="project-card" 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05, rotate: -5 }}
        >
          <video width="100%" autoPlay muted loop>
            <source src="/Portfolio2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3> <a href="https://www.century21.com" target="_blank" rel="noopener noreferrer">CENTURY 21</a></h3>
          <p>We helped clients with modern, high-performance websites that are optimized for speed and user experience.</p>
  
        </motion.div>

        {/* Project 3 */}
        <motion.div 
          className="project-card" 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <video width="100%" autoPlay muted loop>
            <source src="/vape.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3> <a href="https://vape.co.uk" target="_blank" rel="noopener noreferrer">E-COMMERECE </a></h3>
          <p>We helped clients with modern, high-performance websites that are optimized for speed and user experience.</p>
        
        </motion.div>
      </div>
    </div>
  );
};

export default OurWork;
