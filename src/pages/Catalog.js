import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import VehicleContainer from '../components/VehicleContainer';
import Footer from '../components/Footer';

const Catalog = () => {
  return (
    <>
      <div className='app-wrapper'>
        <Hero className='hero-section' hero='catalogHero'>
          <Navbar />
        </Hero>
        <VehicleContainer></VehicleContainer>
        <Footer />
      </div>
    </>
  );
};

export default Catalog;
