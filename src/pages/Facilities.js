
import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Facilities.css";

// Import images (Ensure they are inside src/assets/images)
const facilityImages = {
  gym: require("../assets/images/gym.jpg"),
  pool: require("../assets/images/pool.jpg"),
  yoga: require("../assets/images/yoga.jpg"),
  spa: require("../assets/images/Spa.jpg"),
};

const Facilities = () => {
  const navigate = useNavigate();

  const facilities = [
    { id: "gym", image: facilityImages.gym, title: "Modern Gym", description: "Equipped with cutting-edge machines." },
    { id: "pool", image: facilityImages.pool, title: "Swimming Pool", description: "Relax and enjoy our Olympic-sized pool." },
    { id: "yoga", image: facilityImages.yoga, title: "Yoga Studio", description: "Peaceful environment for yoga enthusiasts." },
    { id: "spa", image: facilityImages.spa, title: "Spa & Sauna", description: "Unwind and rejuvenate after workouts." },
  ];

  return (
    <Box className="facilities-container">
      <Typography variant="h3" gutterBottom align="center" color="primary">
        Our Facilities
      </Typography>
      <Typography variant="body1" className="facilities-description">
        Check out the world-class facilities we provide for your fitness journey.
      </Typography>
      <Grid container spacing={3}>
        {facilities.map((facility) => (
          <Grid item xs={12} sm={6} md={4} key={facility.id}>
            <Card className="facility-card" onClick={() => navigate(`/facility/${facility.id}`)}>
              <CardMedia component="img" height="200" image={facility.image} alt={facility.title} className="facility-image" />
              <CardContent>
                <Typography variant="h6" color="secondary">{facility.title}</Typography>
                <Typography variant="body2" className="facility-text">{facility.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Facilities;
