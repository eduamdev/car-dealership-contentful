import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}
