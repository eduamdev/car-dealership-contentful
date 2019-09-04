import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FeaturedVehicles from '../components/FeaturedVehicles';
import Footer from '../components/Footer';
import { arrowR, quote } from '../components/svg';
import Icon from '../components/Icon';
import styled from 'styled-components';

const link = {
  label: 'See Our Catalog',
  url: '/catalog'
};

const StyledIcon = styled(Icon)`
  display: inline-block;
  fill: #fff;
  width: 52px;
`;

export default function Home() {
  return (
    <>
      <div className='app-wrapper'>
        <Hero className='hero-section'>
          <Navbar />
          <Banner
            title='Looking for a vehicle?'
            subtitle='Look no further, we have you covered!'
            link={link}
            icon={arrowR}
          />
        </Hero>
        <Quote>
          <blockquote>
            <p>
              Vehicles are one of the best modes of transportation.
              Relationships are one of the best vehicles of transformation
            </p>
            <footer>- Kate McGahan</footer>
            <StyledIcon>{quote}</StyledIcon>
          </blockquote>
        </Quote>
        <Services className='services-section' />
        <FeaturedVehicles className='featured-section' />
        <Footer className='footer' />
      </div>
    </>
  );
}
