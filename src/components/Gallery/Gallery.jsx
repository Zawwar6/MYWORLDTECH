import React, { useEffect, useState } from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"; 
import Footer from '../Footer/Footer';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Website Design & Development');

  const services = {
    "Website Design & Development": "We specialize in designing highly responsive, visually striking websites that do more than just look good—they engage users, drive conversions, and create lasting impressions. Our approach is rooted in seamless user experiences, ensuring smooth navigation, fast performance, and intuitive design that keeps visitors coming back With a strong emphasis on modern aesthetics, accessibility, and business growth, we craft websites that not only reflect your brand’s unique identity but also enhance visibility, boost customer interactions, and increase revenue. Whether you're a startup looking to establish your presence or an established business aiming to scale, our expertly designed solutions are tailored to your goals, helping you stand out in the digital landscape.From captivating visuals to strategic functionality, we transform ideas into exceptional online experiences that leave a lasting impact. 🚀",
    "2D Animation & Video Editing": "Bring your ideas to life with stunning 2D animations and professional video editing that captivate, inspire, and leave a lasting impression. Our expertly crafted animations and seamless edits are designed to tell compelling stories, enhance engagement, and amplify your brand’s presence in the digital world. Whether you need dynamic explainer videos, eye-catching motion graphics, or high-quality cinematic edits, we ensure every frame is polished, impactful, and visually striking. With a perfect blend of creativity and technical precision, we transform ordinary content into extraordinary visual experiences that resonate with your audience and set your brand apart. From brand promotions to engaging social media content, we create high-quality, immersive visuals that not only capture attention but also drive real results. Let us help you turn your vision into a masterpiece that speaks volumes in the ever-evolving digital landscape! 🎬✨ ",
    "SEO & Social Media Marketing": "We build and strengthen brands that don’t just exist—they stand out, make an impact, and leave a lasting impression. Through a strategic fusion of design, social media, and data-driven SEO, we craft powerful brand identities that resonate with the right audience and drive meaningful engagement. Our approach goes beyond aesthetics; we focus on creating a digital presence that tells your brand’s story, strengthens credibility, and fuels long-term growth. With visually compelling designs, targeted social media strategies, and advanced SEO techniques, we ensure that your brand not only gains visibility but also thrives in a competitive market.Whether you're launching a new business or scaling an existing one, we provide the tools and expertise to help you establish authority, attract customers, and achieve lasting success. Let’s create something extraordinary together and take your brand to the next level! 🚀✨"
  };

  const videoCards = {
    "Website Design & Development": [
      { id: 1, videoSrc: "/Video4.mp4" },
      { id: 2, videoSrc: "/Portfolio2.mp4" },
      { id: 3, videoSrc: "/vape.mp4" },
      { id: 4, videoSrc: "/video3.mp4" },
    ],
    "2D Animation & Video Editing": [
      { id: 1, videoSrc: "/Animated.mp4" },
      { id: 2, videoSrc: "/Animated2.mp4" },
      { id: 3, videoSrc: "/Animated3.mp4" },
      { id: 4, videoSrc: "/Animated4.mp4" },
    ],
    "SEO & Social Media Marketing": [
      { id: 1, videoSrc: "/Seo.mp4" },
      { id: 2, videoSrc: "/SMS.mp4" },
      { id: 3, videoSrc: "/sms1.mp4" },
      { id: 4, videoSrc: "/seo1.mp4" },
    ]
  };

  

  return (
    
      <section className="services">
        <h2>Our Work Gallery</h2><br />
        <div className="service-tabs">
          {Object.keys(services).map((service) => (
            <button
              key={service}
              className={`tab-btn ${activeTab === service ? 'active' : ''}`}
              onClick={() => setActiveTab(service)}
            >
              {service}
            </button>
          ))}
        </div>
        <div className="service-content">
          <h2>{activeTab}</h2>
          <p>{services[activeTab]}</p>
        </div>

        {/* Video Cards Section */}
        <div className="video-cards">
        {videoCards[activeTab].map((card, index) => (
  <motion.div
    key={`${activeTab}-${card.id}`} // Ensure unique key
    className="video-card"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <video className="video" controls autoPlay muted loop>
      <source src={card.videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>
))}
        </div>
      </section>
    
    
  );
};

export default Gallery;
