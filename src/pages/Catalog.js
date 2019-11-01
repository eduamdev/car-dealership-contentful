import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Banner from '../components/Banner';
import VehicleContainer from '../components/VehicleContainer';
import Footer from '../components/Footer';

const Catalog = () => {
  return (
    <>
      <Hero hero='catalogHero'>
        <Header />
        <Banner title='Catalog' subtitle='See what we have for you!' />
      </Hero>
      <VehicleContainer></VehicleContainer>
      <Footer />
    </>
  );
};

export default Catalog;
