import React, { Component } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { VehicleContext } from '../context';
import { arrowL } from '../components/svg';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug
    };
  }

  static contextType = VehicleContext;

  render() {
    // const { getVehicle } = this.context;
    // const vehicle = getVehicle(this.state.slug);
    const link = {
      label: 'Back to Catalog',
      linkClass: 'heroLinkReverse ripple',
      url: '/catalog'
    };

    return (
      <>
        <Hero hero='vehicleHero'>
          <Navbar />
          <Banner title='Vehicle' link={link} icon={arrowL} />
        </Hero>
        <Footer className='footer' />
      </>
    );
  }
}
