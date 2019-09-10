import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import VehicleContainer from '../components/VehicleContainer';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Catalog = () => {
  return (
    <>
      <div className='app-wrapper'>
        <Hero className='hero-section' hero='catalogHero'>
          <Navbar />
          <Banner title='Catalog' titleClass='catalog' />
        </Hero>
        <VehicleContainer></VehicleContainer>
        {/* <Loading></Loading> */}
        <Footer />
      </div>
    </>
  );
};

export default Catalog;
