import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import VehicleContainer from '../components/VehicleContainer';
import Footer from '../components/Footer';

const Catalog = () => {
  return (
    <>
      <Hero hero='catalogHero'>
        <Navbar />
        <Banner title='Catalog' subtitle='See what we have for you!' />
      </Hero>
      <VehicleContainer></VehicleContainer>
      <Footer />
    </>
  );
};

export default Catalog;
