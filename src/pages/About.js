import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import GymImage1 from "../assets/images/1.jpg";
import GymImage2 from "../assets/images/2.jpg";
import GymImage3 from "../assets/images/abc.jpg";
import "./About.css";

const About = () => {
  const images = [GymImage1, GymImage2, GymImage3];

  return (
    <Box className="about-container">
      {/* Hero Section */}
      <Box className="hero-section">
        <Typography variant="h3" className="hero-title">
          About Our Gym
        </Typography>
        <Typography variant="body1" className="hero-subtitle">
          A fitness center committed to your health and well-being.
        </Typography>
      </Box>

      {/* Image Carousel - Separate Section */}
      <Box className="carousel-section">
        <Carousel className="image-carousel" autoPlay={false} navButtonsAlwaysVisible>
          {images.map((img, index) => (
            <Card key={index} className="carousel-card">
              <CardContent>
                <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>

      {/* Why Choose Us - Separate Section */}
      <Box className="why-choose-us">
        <Typography variant="h4" className="section-title">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" className="section-text">
          Our gym is equipped with the latest fitness technology and experienced trainers
          to help you reach your goals. We offer personalized workout plans,
          nutrition guidance, and a supportive community to keep you motivated.
        </Typography>
        <Button variant="contained" color="primary" className="join-btn">
          Join Now
        </Button>
      </Box>

      {/* Features Section */}
      <Box className="features-section">
        <Typography variant="h4" className="section-title">
          Our Features
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: "Certified Trainers", text: "Work with the best trainers who personalize your fitness journey." },
            { title: "Modern Equipment", text: "Our gym is stocked with the latest state-of-the-art equipment." },
            { title: "Personalized Plans", text: "Get custom workout and diet plans tailored to your needs." }
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card className="feature-card">
                <CardContent>
                  <Typography variant="h6" className="feature-title">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="feature-text">
                    {feature.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Additional Benefits */}
      <Box className="new-section">
        <Typography variant="h4" className="section-title">
          Additional Benefits
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: "24/7 Access", text: "Workout anytime that fits your schedule." },
            { title: "Group Classes", text: "Join engaging group sessions for motivation and fun." }
          ].map((benefit, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card className="feature-card">
                <CardContent>
                  <Typography variant="h6" className="feature-title">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" className="feature-text">
                    {benefit.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
