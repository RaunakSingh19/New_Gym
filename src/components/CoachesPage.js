import React from "react";
import "./CoachesPage.css"; // CSS for styling
import coach1Image from "../assets/images/coach1.jpg";
import coach2Image from "../assets/images/coach2.jpg";
import coach3Image from "../assets/images/coach3.jpg";
// import coach4Image from "../assets/images/coach4.jpg";

const coachesData = [
  {
    name: "Jane Smith",
    role: "Fitness Coach",
    image: coach1Image,
    bio: "Jane specialinzes in high-intensity interval training and weight loss programs.",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Alex Johnson",
    role: "Nutrition Expert",
    image: coach2Image,
    bio: "Alex provides personalized nutrition plans to help you achieve your health goals.",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Brown",
    role: "Yoga Instructor",
    image: coach3Image,
    bio: "Emily focuses on mindfulness and flexibility through yoga and meditation.",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // {
  //   name: "Michael Lee",
  //   role: "Strength Trainer",
  //   image: coach4Image,
  //   bio: "Michael helps clients build strength and endurance with customized workout plans.",
  //   socialLinks: {
  //     facebook: "#",
  //     twitter: "#",
  //     linkedin: "#",
  //   },
  // },
];

// Component for individual coach card
const CoachCard = ({ name, role, image, bio, socialLinks }) => {
  return (
    <div className="coach-card">
      <img src={image} alt={name} className="coach-image" />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
      <div className="social-links">
        <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

// Main component
const CoachesPage = () => {
  return (
    <section className="coaches-page">
      <div className="coaches-header">
        <h2>Meet Our Coaches</h2>
        <p>
          Our team of dedicated professionals is here to guide you on your
          fitness journey. Each coach brings a unique set of skills and expertise
          to help you achieve your goals.
        </p>
      </div>
      <div className="coaches-grid">
        {coachesData.map((coach, index) => (
          <CoachCard key={index} {...coach} />
        ))}
      </div>
    </section>
  );
};

export default CoachesPage;