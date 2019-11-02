import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import VehicleContainer from '../components/VehicleContainer';
import Footer from '../components/Footer';

const Catalog = () => {
  return (
    <>
      <Hero hero='catalogHero'>
        <Header />
      </Hero>
      <VehicleContainer></VehicleContainer>
      <Footer />
    </>
  );
};

export default Catalog;
