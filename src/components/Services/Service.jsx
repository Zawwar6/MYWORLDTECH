  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import './Service.css';
  import { motion } from "framer-motion";
  import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"; 

  const Service = () => {
    const navigate = useNavigate(); 
     const handleNavigation = (path) => {
        navigate(path); 
        setTimeout(() => {
          window.scrollTo(0, 0); 
        }, 100);
      };
    return (
     
      <section className="services">
      <h2>Services We Provide</h2>
      <div className="service-cards">
        <div className="service-card" >
          <img src="/Web.png" alt="Website Design" className="service-icon" onClick={event =>  window.location.href='/gallery'}/>
          <p>Creating responsive websites that engage and drive results with seamless user experiences.</p>
            {/* <button className="cta-btn">View More</button> */}
        </div>
        <div className="service-card">
          <img src="/2DV.png" alt="2D Animation" className="service-icon" onClick={event =>  window.location.href='/gallery'}/>
          <p>Bring your ideas to life with stunning 2D animations and professional video editing</p>
          {/* <button className="cta-btn">View More</button>  */}
        </div>
        <div className="service-card">
          <img src="/Soe.png" alt="SEO & Marketing" className="service-icon" onClick={event =>  window.location.href='/gallery'}/>
          <p>We build strong brands with impactful design, social media presence, and targeted SEO.</p>
          {/* <button className="cta-btn">View More</button>  */}
        </div>
      </div>
    </section>
    


    );
  };

  export default Service;
  