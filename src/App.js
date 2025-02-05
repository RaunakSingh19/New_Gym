import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./pages/Facilities"; // Corrected import
import Services from "./pages/Services"; // Corrected import
import Community from "./pages/Community"; // Corrected import
import Membership from "./pages/Membership"; // Corrected import
import ExerciseDetail from "./pages/ExerciseDetail"; // Corrected typo
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default App;
