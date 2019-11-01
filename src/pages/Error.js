import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { arrowL } from '../components/svg';

const link = {
  label: 'Return Home',
  linkClass: 'heroLinkReverse ripple box-shadow',
  url: '/'
};

export default function Error() {
  return (
    <Hero hero='errorHero'>
      <Header />
      <Banner
        title='Page Not Found'
        subtitle='Not the page you are looking for?'
        link={link}
        icon={arrowL}
      ></Banner>
    </Hero>
  );
}
