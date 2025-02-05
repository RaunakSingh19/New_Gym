import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const Facilities = () => {
  const facilities = [
    { image: "/images/gym1.jpg", title: "Modern Gym", description: "Equipped with cutting-edge machines." },
    { image: "/images/pool.jpg", title: "Swimming Pool", description: "Relax and enjoy our Olympic-sized pool." },
    { image: "/images/yoga.jpg", title: "Yoga Studio", description: "Peaceful environment for yoga enthusiasts." },
    { image: "/images/spa.jpg", title: "Spa & Sauna", description: "Unwind and rejuvenate after workouts." },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        Our Facilities
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem", textAlign: "center" }}>
        Check out the world-class facilities we provide for your fitness journey.
      </Typography>
      <Grid container spacing={3}>
        {facilities.map((facility, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={facility.image}
                alt={facility.title}
              />
              <CardContent>
                <Typography variant="h6" color="secondary">
                  {facility.title}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                  {facility.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Facilities;
