import React, { useState, useEffect, useRef } from 'react';
import './Testimonial.css';

const Testimonial = () => {
 const testimonials = [
     {
       quote: "They helped us create an amazing 2D animation and video editing solution that has given our brand a fresh identity.",
       position: "Creative Director",
       image: "11.png", // Image for 2D animation
     },
     {
       quote: "Their web design and development services transformed our website into a modern, responsive, and user-friendly platform.",
       position: "Project Manager",
       image: "2.jpg", // Image for Web Design
     },
     {
       quote: "Their SEO and digital marketing strategies helped us increase our online visibility by over 50%, boosting our traffic and sales.",
       position: "Marketing Head",
       image: "3.jpg", // Image for SEO & Marketing
     },
   ];
    
      const [isVisibles, setIsVisibles] = useState(false);
      const sectionRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisibles(true); // Trigger animation when section comes into view
            }
          });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }, []);

  return (
    <section ref={sectionRef} className={`testimonial-section ${isVisibles ? 'animate' : ''}`}>
  {/* Styled heading with an underline */}
  <div className="testimonial-header">
    <h2>OUR CLIENT'S FEEDBACK</h2>
    <div className="underline"></div>
  </div>

  <div className="testimonial-container">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className={`testimonial-card ${isVisibles ? 'active' : ''}`}
        style={{ animationDelay: `${(index + 1) * 0.5}s` }}
      >
        <div className="testimonial-image">
          <img
            src={testimonial.image} 
            alt={testimonial.name}
            className="testimonial-img"
          />
        </div>
        <div className="testimonial-content">
          <div className="testimonial-quote">“</div>
          <p>{testimonial.quote}</p>
          <span>{testimonial.position}</span>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Testimonial;
