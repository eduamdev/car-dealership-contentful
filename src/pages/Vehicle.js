import React, { Component } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { VehicleContext } from '../context';
import Wrapper from '../components/Wrapper';
import defaultBcg from '../assets/images/placeholder.jpg';
import { formatMoney } from '../utils/utils';
import Section from '../components/Section';
import { viewport } from '../components/Breakpoints';
import P from '../components/Paragraph';

const StyledSection = styled(Section)`
  & > .vehicle-wrapper {
    padding: 0;
    & > .vehicle-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        'photos'
        'details'
        'info'
        'extras';
      grid-gap: 2em;

      @media ${viewport[9]} {
        grid-template-areas:
          'photos details'
          'photos info'
          'photos extras';
        grid-template-columns: 1fr 400px;
      }

      & > .vehicle-grid__photos,
      & > .vehicle-grid__info,
      & > .vehicle-grid__details,
      & > .vehicle-grid__extras {
        padding: 1em;
      }

      & > .vehicle-grid__photos {
        grid-area: photos;

        & > .vehicle-grid__photos-image {
          width: 100%;
          height: 250px;
          background-color: black; /* fallback color */
          background-position: center;
          background-size: cover;
          margin-bottom: 1.5em;
          border-radius: 2px;

          &:last-child {
            margin: 0;
          }

          @media ${viewport[9]} {
            height: 450px;
            margin-bottom: 3em;
          }
        }
      }

      & > .vehicle-grid__info {
        grid-area: info;

        & > .vehicle-grid__info-list {
          & > .vehicle-grid__info-list__item {
            border-bottom: 1px solid #444;
            padding: 1.5em 0;

            &:last-child {
              border: none;
            }

            & p {
              margin: 0;
            }

            & span {
            }
          }
        }
      }

      & > .vehicle-grid__details {
        grid-area: details;

        & p {
          line-height: 1.75;
        }
      }

      & > .vehicle-grid__extras {
        grid-area: extras;

        & > .vehicle-grid__extras__title {
          color: #fff;
          font-size: 1.1em;
          margin-bottom: 2em;
        }

        & > .vehicle-grid__extras-list {
          & > .vehicle-grid__extras-list__item {
          }
        }
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
        <StyledSection>
          <Wrapper className='vehicle-wrapper'>
            <div className='vehicle-grid'>
              <div className='vehicle-grid__photos'>
                {defaultImg.map((item, index) => {
                  return (
                    <div
                      className='vehicle-grid__photos-image'
                      key={index}
                      style={{ backgroundImage: `url(${item || defaultBcg})` }}
                    />
                  );
                })}
              </div>
              <div className='vehicle-grid__info'>
                <ul className='vehicle-grid__info-list'>
                  <li className='vehicle-grid__info-list__item'>
                    <P>
                      Price: <span>${formatMoney(price)}</span>
                    </P>
                  </li>
                  <li className='vehicle-grid__info-list__item'>
                    <P>
                      Type: <span>{type}</span>
                    </P>
                  </li>
                  <li className='vehicle-grid__info-list__item'>
                    <P>
                      Brand: <span>{brand}</span>
                    </P>
                  </li>
                  <li className='vehicle-grid__info-list__item'>
                    <P>
                      Model: <span>{model}</span>
                    </P>
                  </li>
                  <li className='vehicle-grid__info-list__item'>
                    <P>
                      Max Capacity:{' '}
                      <span>
                        {capacity > 1
                          ? `${capacity} people`
                          : `${capacity} person`}
                      </span>
                    </P>
                  </li>
                  {rental && (
                    <li className='vehicle-grid__info-list__item'>
                      <P>Available for rent</P>
                    </li>
                  )}
                </ul>
              </div>
              <div className='vehicle-grid__details'>
                <P>{description}</P>
              </div>
              <div className='vehicle-grid__extras'>
                <P className='vehicle-grid__extras__title'>Extras</P>
                <ul className='vehicle-grid__extras-list'>
                  {extras.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='vehicle-grid__extras-list__item'
                      >
                        <P>- {item}</P>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Wrapper>
        </StyledSection>
        <Footer className='footer' />
      </>
    );
  }
}
