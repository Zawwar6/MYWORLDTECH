import React, { useState } from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Website Design & Development');

  const services = {
    "Website Design & Development": "Creating responsive websites that engage and drive results with seamless user experiences.",
    "2D Animation & Video Editing": "Bring your ideas to life with stunning 2D animations and professional video editing that captivate your audience and boost your brand visibility.",
    "SEO & Social Media Marketing": "We build strong brands with impactful design, social media presence, and targeted SEO."
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
      { id: 2, videoSrc: "/animation2.mp4" },
      { id: 3, videoSrc: "/animation3.mp4" },
      { id: 4, videoSrc: "/animation4.mp4" },
    ],
    "SEO & Social Media Marketing": [
      { id: 1, videoSrc: "/seo1.mp4" },
      { id: 2, videoSrc: "/seo2.mp4" },
      { id: 3, videoSrc: "/seo3.mp4" },
      { id: 4, videoSrc: "/seo4.mp4" },
    ]
  };

  return (
    <div>
      <section className="services">
        <h1>Our Work Gallery</h1>
        <div className="service-tabs">
          {Object.keys(services).map((service,videoCards) => (
            <button
              key={service}
              className={`tab-btn ${activeTab === service ? 'active' : ''}`}
              onClick={() => setActiveTab(service,videoCards)}
            >
              {service}
            </button>
          ))}
        </div>
        <div className="service-content">
          <h3>{activeTab}</h3>
          <p>{services[activeTab]}</p>
        </div>

        {/* Video Cards Section */}
        <div className="video-cards">
          {videoCards[activeTab].map((card) => (
            <motion.div
              key={card.id}
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
    </div>
  );
};

export default Gallery;
