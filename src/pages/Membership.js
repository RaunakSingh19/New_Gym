import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const Membership = () => {
  const plans = [
    { title: "Basic Plan", price: "$20/month", features: ["Access to gym", "Free lockers"] },
    { title: "Premium Plan", price: "$50/month", features: ["All basic features", "Group classes", "Nutrition coaching"] },
    { title: "VIP Plan", price: "$100/month", features: ["All premium features", "Personal trainer", "Spa & sauna access"] },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        Membership Plans
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem", textAlign: "center" }}>
        Choose the perfect plan for your fitness goals.
      </Typography>
      <Grid container spacing={3}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" color="secondary">
                  {plan.title}
                </Typography>
                <Typography variant="h6" sx={{ margin: "1rem 0" }}>
                  {plan.price}
                </Typography>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{feature}</Typography>
                    </li>
                  ))}
                </ul>
                <Button variant="contained" color="primary" sx={{ marginTop: "1rem" }}>
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Membership;
