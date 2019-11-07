import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Vehicle from './Vehicle';
import theme from '../styles/theme';
import { VehicleContext } from '../context';
import Loading from './Loading';
import viewport from '../styles/media';
import Heading from './Heading';
import Section from './Section';

const StyledSection = styled(Section)`
  background: ${theme.colors.mainBlack};

  & .featured-flex {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    & .featured-flex__main-heading {
      margin-bottom: 3em;
      text-align: left;
      letter-spacing: 0.4px;
      font-weight: 900;
      position: relative;
      display: inline-block;

      &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 80px;
        top: 45px;
        left: 0;
        background: #da353b;
      }

      @media ${viewport[7]} {
        text-align: center;

        &:after {
          left: calc(50% - 40px);
          top: 55px;
        }
      }
    }
  }

  & .featured-grid {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    grid-gap: 1rem;

    @media ${viewport[7]} {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    @media ${viewport[9]} {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }
`;

export default class FeaturedVehicles extends Component {
  static contextType = VehicleContext;
  render() {
    let { loading, featuredVehicles: vehicles } = this.context;

    vehicles = vehicles.map(vehicle => {
      return <Vehicle key={vehicle.id} vehicle={vehicle} />;
    });

    return (
      <StyledSection>
        <Wrapper>
          <div className='featured-flex'>
            <Heading rank={2} className='featured-flex__main-heading'>
              Featured Vehicles
            </Heading>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className='featured-grid'>{vehicles}</div>
          )}
        </Wrapper>
      </StyledSection>
    );
  }
}
