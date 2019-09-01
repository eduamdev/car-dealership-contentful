import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FeaturedVehicles from '../components/FeaturedVehicles';
import Footer from '../components/Footer';

const link = {
  label: 'See our catalog',
  url: '/vehicles'
};

export default function Home() {
  return (
    <>
      <div className='app-wrapper'>
        <Hero className='hero-section'>
          <Navbar />
          <Banner
            title='Looking for a vehicle?'
            subtitle='We have you covered!'
            link={link}
          />
        </Hero>
        <Services className='services-section' />
        <FeaturedVehicles className='featured-section' />
        <Footer className='footer' />
      </div>
    </>
  );
}
