import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = () => {
  const navigate = useNavigate(); // ✅ Correct way to use navigation

  return (
    <div>
      <section className="services">
        <h1>Our Services</h1>
        <div className="service-cards">
          <div className="service-card">
            <h3>Website Design & Development</h3>
            <p>Creating responsive websites that engage and drive results with seamless user experiences.</p>
            <button className="cta-btn" onClick={() => navigate('/gallery')}>Learn More</button> 
          </div>
          <div className="service-card">
            <h3>2D Animation & Video Editing</h3>
            <p>Bring your ideas to life with stunning 2D animations and professional video editing that captivate your audience and boost your brand visibility.</p>
            <button className="cta-btn" onClick={() => navigate('/gallery')}>Learn More</button> 
          </div>
          <div className="service-card">
            <h3>SEO & Social Media Marketing</h3>
            <p>We build strong brands with impactful design, social media presence, and targeted SEO.</p>
            <button className="cta-btn" onClick={() => navigate('/gallery')}>Learn More</button> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
