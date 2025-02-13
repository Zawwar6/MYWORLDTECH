import React from "react";
import "./Team.css"; // External CSS file

const Team = () => {
  return (
    <section className="meet-our-team">
      <div className="team-content">
        <h2>Meet Our Team – The Minds Behind MyWorldTec</h2> <br />
        <p>
        At MyWorldTec, we are more than just a team—we are a powerhouse of innovation, creativity, and strategic brilliance. Every project we undertake is fueled by a fusion of cutting-edge technology, artistic vision, and data-driven marketing expertise. From crafting immersive web experiences to revolutionizing digital branding and animation, we don’t just build projects—we shape the future. Our commitment isn’t just to excellence; it’s to redefining possibilities. Let’s transform ideas into digital masterpieces, together.
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
