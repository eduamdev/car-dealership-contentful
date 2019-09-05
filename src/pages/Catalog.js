import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import VehicleContainer from '../components/VehicleContainer';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Catalog = () => {
  return (
    <>
      <div className='app-wrapper'>
        <Hero className='hero-section' hero='catalogHero'>
          <Navbar />
        </Hero>
        <VehicleContainer></VehicleContainer>
        {/* <Loading></Loading> */}
        <Footer />
      </div>
    </>
  );
};

export default Catalog;
