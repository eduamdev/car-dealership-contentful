import React, { Component } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { VehicleContext } from '../context';
import { arrowL } from '../components/svg';
import Wrapper from '../components/Wrapper';
import vehicleImg from '../assets/images/vehicle-3.jpg';
import viewport from '../styles/media';
import theme from '../styles/theme';

const ImageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 0.75em;
  padding: 5em 0 3em 0;

  & img {
    width: 100%;
    height: 240px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  justify-content: center;
  grid-template-areas:
    'details'
    'info'
    'extras';

  @media ${viewport[7]} {
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas:
      'info details'
      'extras extras';
  }

  @media ${viewport[9]} {
    grid-template-columns: 1fr 2fr;
  }
`;

const Details = styled.section`
  grid-area: details;
  color: ${theme.colors.lightGrey};
  padding: 2em 1em;

  @media ${viewport[7]} {
    padding: 2em 0em 2em 3em;
  }

  & h3 {
    font-size: 2.2em;
    margin-bottom: 1em;
  }

  & p {
    line-height: 1.45;

    @media ${viewport[7]} {
      font-size: 1.05em;
      line-height: 1.3;
    }
  }
`;

const Info = styled.section`
  grid-area: info;
  background: ${theme.colors.matteBlack};
  color: ${theme.colors.lightGrey};
  padding: 2em;
  border-radius: 2px;

  & h3 {
    font-size: 2.2em;
  }

  & ul {
    display: grid;
    align-items: baseline;
    justify-content: stretch;
    width: 100%;
    height: 100%;
    padding: 2em 0;

    & li {
      border-bottom: 1px solid ${theme.colors.lightGrey};
      font-size: 1.02em;
      letter-spacing: 0.5px;

      @media ${viewport[7]} {
        font-size: 1.075em;
        letter-spacing: 1px;
      }
    }
  }
`;

const Extras = styled.section`
  grid-area: extras;
  color: ${theme.colors.lightGrey};
  padding: 2em 1em;

  & h3 {
    font-size: 2.2em;
    margin-bottom: 1em;
    border-bottom: 1px solid ${theme.colors.lightGrey};
  }

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;

    & li {
      list-style: disclosure-closed;
      margin: 0 2em;
    }
  }
`;

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
        <Wrapper>
          <ImageContainer>
            <img src={vehicleImg} alt='image' />
            <img src={vehicleImg} alt='image' />
            <img src={vehicleImg} alt='image' />
          </ImageContainer>
          <GridContainer>
            <Details>
              <h3>Details</h3>
              <p>
                Street art edison bulb gluten-free, tofu try-hard lumbersexual
                brooklyn tattooed pickled chambray. Actually humblebrag next
                level, deep v art party wolf tofu direct trade readymade
                sustainable hell of banjo. Organic authentic subway tile cliche
                palo santo, street art XOXO dreamcatcher retro sriracha portland
                air plant kitsch stumptown. Austin small batch squid gastropub.
                Pabst pug tumblr gochujang offal retro cloud bread bushwick
                semiotics before they sold out sartorial literally mlkshk.
                Vaporware hashtag vice, sartorial before they sold out pok pok
                health goth trust fund cray.
              </p>
            </Details>
            <Info>
              <h3>Info</h3>
              <ul>
                <li>Price: 2000</li>
                <li>Size: 400 SQFT</li>
                <li>Max Capacity: 3 People</li>
                <li>Pets Allowed</li>
              </ul>
            </Info>
            <Extras>
              <h3>Extras</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem, ipsum.</li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati molestias fugiat sit.
                </li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </Extras>
          </GridContainer>
        </Wrapper>
        <Footer className='footer' />
      </>
    );
  }
}
