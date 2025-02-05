import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Button } from "@mui/material";
import GymLogo from "../assets/images/logo/3-removebg-preview (1).png"; // Replace with your actual logo path
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: "0.8rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <img src={GymLogo} alt="Logo" className="logo" />
      </Link>

      {/* Navigation Links */}
      <Stack direction="row" spacing={3} className="nav-links">
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/facilities" className="nav-link">FACILITIES</Link>
        <Link to="/services" className="nav-link">SERVICES</Link>
        <Link to="/community" className="nav-link">COMMUNITY</Link>
        <Link to="/membership" className="nav-link">MEMBERSHIP</Link>
      </Stack>

      {/* Icons and Button */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#d81b60",
            alignItems: 'stretch',
            color: "#fff",
            textTransform: "uppercase",
            fontWeight: "600",
            padding: "1.0rem 1.9rem",
            "&:hover": { backgroundColor: "#ad1457" },
          }}
        >
          Join Now
        </Button>
      </Stack>
    </Box>
  );
};

export default Navbar;
