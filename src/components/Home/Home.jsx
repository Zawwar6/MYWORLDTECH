import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useEffect, useState ,useRef } from "react";
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("work-card");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
    
     useEffect(() => {
         AOS.init({ duration: 1000, once: true }); // ✅ Ensure animations work smoothly
         AOS.refresh(); // ✅ Refresh animations
       }, []);
       const tasks = ["Branding", "Photography", "Social Media", "Videography", "UI/UX"];
         const fields = ["Name", "Email", "Company name", "Your Designation", "Phone Number"];
         const budget = ["$2000-$5000", "$5000-$10000", "more than $10000"];
       
         const [activeTasks, setActiveTasks] = useState([]);
         const [activeBudget, setActiveBudget] = useState(null);
       
         const toggleTask = (task) => {
           setActiveTasks((prevTasks) =>
             prevTasks.includes(task)
               ? prevTasks.filter((t) => t !== task)
               : [...prevTasks, task]
           );
         };
         const navigate = useNavigate(); // ✅ Correct way to use navigation
        
           const handleNavigation = (path) => {
             navigate(path);
             window.scrollTo(0, 0); // Scroll to top
           };
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1><b>MyWorldTec</b> - Digital Solutions, Video Editing, Animation & Web Development</h1>
          <p><b>MyWorldTec</b> provides professional video editing, 2D/3D animation, web design & development, <br /> SEO, SMM, and SMO services. <br /><br /> Get top-notch tech solutions for your business.</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

    

      {/* Brand Logo Slider Section */}
      <section className="brand-slider-section">
        <h2 className="brand-slider-title">Our Tech Stack</h2>
        <br /><br /><br />
        <Slider {...sliderSettings}>
          <div><img src="/React.png" alt="Brand 1" className="brand-logo" /></div>
          <div><img src="/Amazon.png" alt="Brand 2" className="brand-logo" /></div>
          <div><img src="/Microsoft.png" alt="Brand 4" className="brand-logo" /></div>
          <div><img src="/aws.png" alt="Brand 5" className="brand-logo" /></div>
          <div><img src="/amazon1.png" alt="Brand 4" className="brand-logo" /></div>
          <div><img src="/php.png" alt="Brand 4" className="brand-logo" /></div>
          <div><img src="/asp.net.png" alt="Brand 4" className="brand-logo" /></div>
          <div><img src="/MongoDB.jpg" alt="Brand 4" className="brand-logo" /></div>
          {/* Add more logos as needed */}
        </Slider>
      </section>

      <section className="about-us">
        <div className="about-us-container" >
          <div className="about-us-image" >
            <img src="/AboutUs(1).png" alt="About Us" />

          </div>
          <div className="about-us-content" data-aos="fade-down-left">
            <h2>Who We Are?</h2>
            <p>
         <span> At MyWorldTec, we’re not just a digital agency — we’re your creative partner. We specialize in crafting custom digital solutions that fuel business growth and spark innovation.</span> <br /> <br /> Whether you’re a startup or an established enterprise, our expert team collaborates with you to turn your vision into reality, delivering results that matter. Lets build something extraordinary together and take your business to the next level.
            </p>
            <button className="cta-btn">View More</button>
          </div>
        </div>
      </section>
      <br />
        
        <div>
        <section className="services">
          <h1>Our Services</h1>
          <div className="service-cards">
            <div className="service-card">
              <h3>Website Design & Development</h3>
              <p>Creating responsive websites that engage and drive results with seamless user experiences.</p>
              <button className="cta-btn" onClick={() => handleNavigation('/gallery')}>View More</button> 
            </div>
            <div className="service-card">
              <h3>2D Animation & Video Editing</h3>
              <p>Bring your ideas to life with stunning 2D animations and professional video editing that captivate your audience and boost your brand visibility.</p>
              <button className="cta-btn" onClick={() => handleNavigation('/gallery')}>View More</button> 
            </div>
            <div className="service-card">
              <h3>SEO & Social Media Marketing</h3>
              <p>We build strong brands with impactful design, social media presence, and targeted SEO.</p>
              <button className="cta-btn" onClick={() => handleNavigation('/gallery')}>View More</button> 
            </div>
          </div>
        </section>
      </div>
      {/* Portfolio Section */}

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
          <h3> <a href="https://www.century21.com" target="_blank" rel="noopener noreferrer">21 CENTURY</a></h3>
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
            <source src="/Animated.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3> <a href="" target="_blank" rel="noopener noreferrer">2D ANIMATION</a></h3>
          <p>We create engaging and high-quality 2D animations that are visually captivating, smooth, and optimized for an exceptional viewing experience. Our animations are designed to deliver impactful storytelling with modern aesthetics and seamless motion. 🚀✨</p>
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
            <source src="/videoedit.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3> <a href="" target="_blank" rel="noopener noreferrer">VIDEO EDITING</a></h3>
          <p>We provide professional video editing services that enhance visuals, maintain high-quality resolution, and ensure smooth transitions. Our edits are crafted for maximum engagement, storytelling impact, and a seamless viewing experience. 🎬✨</p>
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
            <source src="/SMM.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3> <a href="" target="_blank" rel="noopener noreferrer">SMM</a></h3>
          <p>We offer expert social media and digital marketing services that boost brand visibility, engage audiences, and drive results. Our strategies are tailored for maximum reach, impactful storytelling, and lasting online presence. 📢🚀</p>
        </motion.div>
      </div>
    </div>
      
      <hr className="animated-hr" />

      {/* Other sections */}
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




      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Project?</h2>
      </section>
    
      {/* Contact Section */}
      <div className="container">
      <br /><br /><br />
      <h2 className="title">You need to do</h2>
      <div className="button-group">
        {tasks.map((task, index) => (
          <button 
            key={index} 
            className={`task-button ${activeTasks.includes(task) ? "active" : ""}`}
            onClick={() => toggleTask(task)}
          >
            {task}
          </button>
        ))}
      </div>
      
      <form className="form-container">
        {fields.map((field, index) => (
          <div key={index} className="input-group">
            <input type="text" placeholder={field} className="input-field" />
          </div>
        ))}
      </form>

      <h2 className="title budget-title">Select Your Budget</h2>
      <div className="button-group budget-group">
        {budget.map((amount, index) => (
          <button 
            key={index} 
            className={`budget-button ${activeBudget === amount ? "active" : ""}`}
            onClick={() => setActiveBudget(amount)}
          >
            {amount}
          </button>
        ))}
      </div>

      <div className="project-details">
        <h3 className="project-text">Share details about your project</h3>
        <br />
        <textarea name="" id="" rows={10} cols={150}></textarea>
      </div>
    </div>
    </div>
    
  );
};

export default Home;