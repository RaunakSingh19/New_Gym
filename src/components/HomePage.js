import React from "react";
import backgroundImage from "../assets/images/abc.jpg"; // Import the image
import "./HomePage.css"; // Import custom CSS

const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        color: "white",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        <h1 className="homepage-title">Welcome to PowerLiftZone</h1>
        <p className="homepage-description">
          The fitness facility for all of your needs
        </p>
        <div className="homepage-buttons">
          <button className="navbar-button primary-button">Join Now</button>
          <button className="navbar-button secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
