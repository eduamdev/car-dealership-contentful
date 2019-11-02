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

  & .main-heading {
    margin-bottom: 1.5em;
    text-align: center;
    letter-spacing: 0.4px;
    font-weight: 400;
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
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
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
          <Heading className='main-heading'>Featured Vehicles</Heading>
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
