import React, { Component } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { VehicleContext } from '../context';
import Wrapper from '../components/Wrapper';
import defaultBcg from '../assets/images/placeholder.jpg';
import viewport from '../styles/media';
import theme from '../styles/theme';
import { formatMoney } from '../utils/utils';

const ImageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 0.75em;
  padding: 3em 0 1.5em 0;

  @media ${viewport[7]} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media ${viewport[9]} {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  & .image {
    width: 100%;
    /* height: 17em; */
    height: 250px;
    border: 1px solid ${theme.colors.darkGrey};
    border-radius: 2px;
    background-color: black; /* fallback color */
    background-position: center;
    background-size: cover;

    /* @media ${viewport[7]} {
      height: 25em;
    } */

    @media ${viewport[7]} {
    height: 300px;
  }

  @media ${viewport[9]} {
    height: 390px;
  }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  justify-content: center;
  grid-template-areas:
    'info'
    'details'
    'extras';

  @media ${viewport[7]} {
    grid-template-columns: 1fr 1.3fr;
    grid-template-areas:
      'info details'
      'extras extras';
  }

  @media ${viewport[9]} {
    grid-template-columns: 1fr 2fr;
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  padding: 0.3em 0;
  border-bottom: 2px solid ${theme.colors.myrtleGreen};

  @media ${viewport[7]} {
    font-size: 2em;
  }
`;

const Details = styled.section`
  grid-area: details;
  color: ${theme.colors.lightGrey};
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1em;
  grid-template-rows: max-content 1fr;

  @media ${viewport[7]} {
    padding: 2em 0em 2em 3em;
  }

  & p {
    line-height: 1.5;
    font-weight: 200;
    padding: 2em 0;
    font-size: 0.95em;

    @media ${viewport[7]} {
      font-size: 1.05em;
      line-height: 1.65;
    }
  }
`;

const Info = styled.section`
  grid-area: info;
  background: ${theme.colors.matteBlack};
  color: ${theme.colors.lightGrey};
  font-weight: 200;
  padding: 2em;
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1em;
  grid-template-rows: max-content 1fr;

  & ul {
    display: grid;
    align-items: baseline;
    justify-content: stretch;
    grid-row-gap: 1em;
    width: 100%;
    height: 100%;
    padding: 2em 0;

    & li {
      border-bottom: 1px solid ${theme.colors.darkGrey};
      font-size: 0.95em;
      letter-spacing: 0.5px;

      @media ${viewport[7]} {
        font-size: 1em;
        letter-spacing: 0.3px;
        grid-gap: 0;
      }

      & span {
        color: #ddd;
        font-weight: 400;
        font-size: 1.05em;
        letter-spacing: 0.3px;

        @media ${viewport[7]} {
          font-weight: 700;
        }
      }
    }
  }
`;

const Extras = styled.section`
  grid-area: extras;
  color: ${theme.colors.lightGrey};
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1em;
  grid-template-rows: max-content 1fr;

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    padding: 2em 0;

    & li {
      margin: 0 2em;
      font-size: 0.95em;
      font-weight: 200;

      @media ${viewport[7]} {
        font-size: 1.05em;
      }
    }
  }
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = VehicleContext;

  render() {
    const { getVehicle } = this.context;
    const vehicle = getVehicle(this.state.slug);

    if (!vehicle) {
      return (
        <Hero hero='vehicleHeroNotFound'>
          <Header />
          <Banner title='No such vehicle could be found...' />
        </Hero>
      );
    }

    const {
      name,
      description,
      type,
      brand,
      model,
      capacity,
      price,
      extras,
      rental,
      images
    } = vehicle;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <Hero hero='vehicleHero' img={mainImg}>
          <Header />
          <Banner title={`${name}`} />
        </Hero>
        <section>
          <Wrapper>
            <ImageContainer>
              {defaultImg.map((item, index) => {
                return (
                  <div
                    className='image'
                    key={index}
                    style={{ backgroundImage: `url(${item || defaultBcg})` }}
                  />
                );
              })}
            </ImageContainer>
            <GridContainer>
              <Details>
                <Title>Details</Title>
                <p>{description}</p>
              </Details>
              <Info>
                <Title>Info</Title>
                <ul>
                  <li>
                    Price: <span>${formatMoney(price)}</span>
                  </li>
                  <li>
                    Type: <span>{type}</span>
                  </li>
                  <li>
                    Brand: <span>{brand}</span>
                  </li>
                  <li>
                    Model: <span>{model}</span>
                  </li>
                  <li>
                    Max Capacity:{' '}
                    <span>
                      {capacity > 1
                        ? `${capacity} people`
                        : `${capacity} person`}
                    </span>
                  </li>
                  {rental && (
                    <li>
                      <span>Can be rented</span>
                    </li>
                  )}
                </ul>
              </Info>
              <Extras>
                <Title>Extras</Title>
                <ul>
                  {extras.map((item, index) => {
                    return <li key={index}>- {item}</li>;
                  })}
                </ul>
              </Extras>
            </GridContainer>
          </Wrapper>
        </section>
        <Footer className='footer' />
      </>
    );
  }
}
