import React, { useEffect } from "react";
import "./Team.css"; // External CSS file

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="meet-our-team">
      <div className="team-content">
        <h2 className="team-heading">Meet Our Expert Team – The Minds Behind MyWorldTec</h2>
        <p className="team-para">
          At <strong>MyWorldTec</strong>, we are not just a company—we are a global movement, driving businesses towards digital excellence.  
          With a team of highly skilled professionals, we deliver world-class solutions in digital marketing, full-stack development, 2D animation, video editing, web design, and SEO, ensuring our clients stay ahead in the ever-evolving digital landscape.
        </p>
        <p className="team-para">
          Our impact knows no boundaries. From startups to global enterprises, we help brands establish a powerful digital presence, turning visions into reality. With cutting-edge strategies, creative expertise, and data-driven solutions, we ensure that businesses don’t just survive online they dominate.
        </p>
        <p className="team-para">
          With a commanding presence on every major social media platform, we are setting trends, engaging audiences, and driving growth like never before. Whether it’s crafting a compelling online identity, optimizing websites for peak performance, or creating immersive digital experiences, MyWorldTec is the name businesses trust worldwide.
        </p>
        <p className="team-para">
          Operating from <strong>washington-DC United States</strong>, and reaching **every corner of the world**, our mission is clear: to redefine digital success and empower businesses with innovative solutions. We believe in excellence, creativity, and relentless innovation, making us a trusted partner for companies looking to scale in today’s digital-first world.
        </p>
        <p className="team-para">
          Join us on this journey as we continue to lead, inspire, and transform the digital landscape one groundbreaking project at a time. 🚀
        </p>
      </div>

      <div className="team-images">
        <div className="image-grid">
          <img src="/image1.png" alt="Team 1" />
          <img src="/image2.png" alt="Team 2" />
          <img src="/image3.png" alt="Team 3" />
          <img src="/image4.png" alt="Team 4" />
        </div>
      </div>
    </section>
  );
};

export default Team;
