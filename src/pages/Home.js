import React from 'react';
import { Box } from '@mui/material';
// import HeroBanner from '../components/HeroBanner';
import CoachesPage from '../components/CoachesPage'; // Assuming you have this component
import Exersises from '../components/Exersises'; // Assuming you have this component
// import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
// import InteractiveBody from './Exersises/InteractiveBody';   uncomment this after everything done this is body_parts

const Home = () => {
  return (
    <Box>
      <HomePage />
      {/* <InteractiveBody/>  body part page*/}
      <CoachesPage /> 
      {/* <HeroBanner /> */}
      <Exersises />
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;