import React from 'react';
import Quote from '../components/Quote';
import Services from '../components/Services';
import FeaturedVehicles from '../components/FeaturedVehicles';
import Footer from '../components/Footer';
import { quote } from '../components/svg';
import Hero from '../components/Hero';
import quoteImg from '../assets/images/quote-1.jpg';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { arrowR } from '../components/svg';

const link = {
  label: 'See Our Catalog',
  linkClass: 'heroLink ripple',
  url: '/catalog'
};

const Home = () => {
  return (
    <>
      <Hero hero='defaultHero'>
        <Header />
        <Banner
          title='Looking for a Vehicle?'
          subtitle='Look no further, we have you covered!'
          link={link}
          icon={arrowR}
        />
      </Hero>
      <Hero hero='quote' img={quoteImg}>
        <Quote
          text='Vehicles are one of the best modes of transportation. Relationships
            are one of the best vehicles of transformation'
          footer='- Kate McGahan'
          icon={quote}
        ></Quote>
      </Hero>
      <Services />
      <FeaturedVehicles />
      <Footer />
    </>
  );
};

export default Home;
