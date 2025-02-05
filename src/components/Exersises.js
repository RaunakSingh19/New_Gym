import React from 'react';
import { Box, Typography, } from "@mui/material";
import HeroBannerImage1 from "../assets/images/banner_cp.png"; // Adjust the path as needed
import HeroBannerImage2 from "../assets/images/Hero-Banner_cp2.jpeg";
import './Exercises.css'; // Import the CSS file for styling

const Exercises = () => {
  return (
    <div className="exercises-container">
      {/* First Section */}
      <div className="section">
        <div className="content">
          <Typography variant="h3" className="section-title">
            Title {/* title */}
          </Typography>
          <Typography variant="h6" className="section-text">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
          </Typography>
          <button class="button"  href="#membership" ><span>View More </span></button>
        </div>
        <div className="image-container">
          <Box
            className="hero-image"
            style={{ backgroundImage: `url(${HeroBannerImage1})` }}
          ></Box>
        </div>
      </div>

      {/* Second Section */}
      <div className="section reverse">
        <div className="content">
          <Typography variant="h3" className="section-title">
            Title
          </Typography>
          <Typography variant="h5" className="section-subtitle">
            1. We’re committed to a clean and safe facility. View our policies here.
          </Typography>
          <hr className="divider" />
          <Typography variant="h4" className="section-text">
            <strong>PowerLiftZone</strong>
          </Typography>
          <Typography variant="h6" className="section-text">
          ABOUT FACILITIES SERVICES COMMUNITY MEMBERSHIP Log In Join Now
          </Typography>
         
          <Typography variant="body1" className="section-text">
            Greater prices for your parents story can get your users know a more more country out.
          </Typography>
          <button class="button"  href="#polocies" ><span>View </span></button>{/*change the button name*/}
        </div>
        <div className="image-container">
          <Box
            className="hero-image"
            style={{ backgroundImage: `url(${HeroBannerImage2})` }}
          ></Box>
        </div>
      </div>
    </div>
  );
};

export default Exercises;