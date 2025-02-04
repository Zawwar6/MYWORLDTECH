import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div>
      <section className="services">
        <h1>Our Services</h1>
        <div className="service-cards">
          <div className="service-card">
          <h3>Website Design & Development</h3>
<p>Crafting beautiful, responsive websites that capture attention and drive results. We design seamless user experiences tailored to your business, from sleek landing pages to robust e-commerce platforms.</p>
            <button className="cta-btn">Learn More</button>
          </div>
          <div className="service-card">
          <h3>2D Animation & Video Editing</h3>
<p>Bring your ideas to life with stunning 2D animations and professional video editing that captivate your audience and boost your brand visibility.</p>

            <button className="cta-btn">Learn More</button>
          </div>
          <div className="service-card">
            <h3>SEO & Social Media Marketing</h3>
            <p>We help businesses build a powerful and memorable brand identity that resonates across digital platforms, enhancing your presence on social media and improving visibility with targeted SEO strategies.</p>

            <button className="cta-btn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
