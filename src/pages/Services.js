import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Services = () => {
  const services = [
    { title: "Personal Training", description: "Get one-on-one guidance from expert trainers." },
    { title: "Group Classes", description: "Join a variety of group classes to stay motivated." },
    { title: "Nutrition Coaching", description: "Personalized diet plans to help you achieve your goals." },
    { title: "Cardio Equipment", description: "State-of-the-art cardio machines for all fitness levels." },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem", textAlign: "center" }}>
        Explore the variety of services we offer to help you achieve your fitness goals.
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" color="secondary">
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
