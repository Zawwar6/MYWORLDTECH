import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <section className="about-us">
        <div className="about-us-container">
          <div className="about-us-image">
            <img src="/AboutUs.jpg" alt="About Us" />
          </div>
          <div className="about-us-content">
            <h2>About Us</h2>
            <p>
            At MyWorldTec, we’re not just a digital agency — we’re your creative partner. We specialize in crafting custom digital solutions that fuel business growth and spark innovation. Whether you’re a startup or an established enterprise, our expert team collaborates with you to turn your vision into reality, delivering results that matter. Lets build something extraordinary together and take your business to the next level.
            </p>
            <button className="cta-btn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
