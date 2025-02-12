import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const navigate = useNavigate(); // ✅ Navigation hook

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // ✅ Ensure animations work smoothly
    AOS.refresh(); // ✅ Refresh animations
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
   
  };

  return (
    <div>
      <section className="about-us">
        <div className="about-us-container">
          <div className="about-us-image" data-aos="fade-down-right">
            <img src="/abb.jpg" alt="About Us" />
          </div>
          <div className="about-us-content" data-aos="fade-down-left">
            <h2>Who We Are?</h2>
            <p>
              <span>
                At MyWorldTec, we’re not just a digital agency — we’re your creative partner. We specialize in crafting custom digital solutions that fuel business growth and spark innovation.
              </span> 
              <br /><br /> 
              Whether you’re a startup or an established enterprise, our expert team collaborates with you to turn your vision into reality, delivering results that matter. Let's build something extraordinary together and take your business to the next level.
            </p>
            <button className="cta-btn" onClick={() => handleNavigation('/our-team')}>View More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
