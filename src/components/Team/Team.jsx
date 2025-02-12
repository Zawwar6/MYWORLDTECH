import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "./Team.css"; // CSS file import

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Alex Brown",
    role: "Senior Developer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Meet Our Team</h2>
      <p className="team-subheading">
        A team of passionate and skilled professionals driving innovation.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="team-icons">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="icon linkedin" />
              </a>
              <a href={member.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="icon twitter" />
              </a>
              <a href={member.github} target="_blank" rel="noreferrer">
                <FaGithub className="icon github" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
