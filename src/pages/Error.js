import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import { arrowL } from '../components/svg';

const link = {
  label: 'Return Home',
  linkClass: 'heroLinkReverse ripple',
  url: '/'
};

export default function Error() {
  return (
    <Hero hero='errorHero'>
      <Navbar />
      <Banner
        title='Page Not Found'
        subtitle='Not the page you are looking for?'
        link={link}
        icon={arrowL}
      ></Banner>
    </Hero>
  );
}
