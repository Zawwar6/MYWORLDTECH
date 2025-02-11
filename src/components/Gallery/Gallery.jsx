import React, { useState } from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Website Design & Development');

  const services = {
    "Website Design & Development": "Crafting highly responsive and visually stunning websites that not only captivate users but also drive meaningful engagement and conversions.  With a focus on seamless user experiences, intuitive navigation, and modern design principles, we ensure that every website we create is optimized for performance, accessibility, and business growth. Whether you're looking to enhance brand visibility, boost customer interaction, or increase sales, our expertly designed websites are tailored to meet your specific goals.",
    "2D Animation & Video Editing": "Transform your vision into reality with captivating 2D animations and high-quality video editing that leave a lasting impact. Our expertly crafted animations and seamless edits are designed to engage your audience, enhance storytelling, and elevate your brand’s visibility. Whether you need eye-catching motion graphics, dynamic explainer videos, or polished cinematic edits, we bring creativity and precision to every project, ensuring your content stands out in the digital landscape.",
    "SEO & Social Media Marketing": "We create powerful and memorable brands through strategic design, a compelling social media presence, and data-driven SEO. Our approach ensures that your brand not only stands out but also connects with the right audience, driving engagement and long-term growth. From visually stunning designs to expertly crafted digital strategies, we help you establish a strong market presence and achieve lasting success."
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
    <div>
      <section className="services">
        <h1>Our Work Gallery</h1>
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
          <h3>{activeTab}</h3>
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
    </div>
  );
};

export default Gallery;
