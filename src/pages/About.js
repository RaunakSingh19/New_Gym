import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import GymImage from "../assets/images/abc.jpg"; // Update with your actual image path
import GymImage1 from "../assets/images/background_img.jpg";
const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${GymImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to Our Gym
          </Typography>
          <Typography variant="h6">
            Achieve your fitness goals with the best trainers and state-of-the-art
            facilities!
          </Typography>
        </Box>
      </Box>

      {/* About Content */}
      <Box sx={{ padding: "2rem" }}>
        <Grid container spacing={4}>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
            >
              Why Choose Us?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: "1.8" }}>
              At our gym, we believe in empowering you to lead a healthier life.
              Whether you're a beginner or a pro, we offer customized plans,
              top-notch equipment, and supportive trainers to help you excel.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                padding: "0.8rem 2rem",
              }}
            >
              Join Us Today
            </Button>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={GymImage}
                alt="Gym Facility"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          textAlign: "center",
          padding: "3rem 2rem",
          marginTop: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Ready to Start Your Fitness Journey?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Join our community and transform your health today!
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#fff",
            color: "primary.main",
            textTransform: "uppercase",
            fontWeight: "bold",
            padding: "1rem 2rem",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          Get Started Now
        </Button>
      </Box>
    </Box>
  );
};

export default About;
