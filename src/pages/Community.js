import React from "react";
import { Box, Typography, Avatar, Grid, Card, CardContent } from "@mui/material";

const Community = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Amazing gym with a great sense of community!",
      avatar: "/images/avatar1.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "The trainers here are excellent. Highly recommend!",
      avatar: "/images/avatar2.jpg",
    },
    {
      name: "Mark Johnson",
      feedback: "I love the group classes and facilities available.",
      avatar: "/images/avatar3.jpg",
    },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        Our Community
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem", textAlign: "center" }}>
        Hear what our members have to say about their experience.
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 80, height: 80, margin: "0 auto" }}
                />
                <Typography variant="h6" color="secondary" sx={{ marginTop: "1rem" }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                  "{testimonial.feedback}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Community;
