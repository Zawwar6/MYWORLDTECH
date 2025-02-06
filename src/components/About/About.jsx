import React, { useEffect } from 'react';  // ✅ Import useEffect
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ✅ Import AOS CSS

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // ✅ Ensure animations work smoothly
    AOS.refresh(); // ✅ Refresh animations
  }, []);

  return (
    <div>
      <section className="about-us">
        <div className="about-us-container">
          <div className="about-us-image" data-aos="fade-down-right">
            <img src="/AboutUs(1).png" alt="About Us" />
          </div>
          <div className="about-us-content" data-aos="fade-down-left"> {/* ✅ Apply AOS to content too */}
            <h2>Who We Are?</h2>
            <p>
              <span>
                At MyWorldTec, we’re not just a digital agency — we’re your creative partner. We specialize in crafting custom digital solutions that fuel business growth and spark innovation.
              </span> 
              <br /><br /> 
              Whether you’re a startup or an established enterprise, our expert team collaborates with you to turn your vision into reality, delivering results that matter. Let's build something extraordinary together and take your business to the next level.
            </p>
            <button className="cta-btn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
