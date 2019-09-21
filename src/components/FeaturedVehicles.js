import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Vehicle from './Vehicle';
import Title from './Title';
import theme from '../styles/theme';
import { VehicleContext } from '../context';
import Loading from './Loading';
import viewport from '../styles/media';

const StyledSection = styled.section`
  background: ${theme.colors.mainBlack};
`;

const GridContainer = styled.div`
  /* margin: 5em auto; */
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 1rem;

  @media ${viewport[7]} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media ${viewport[9]} {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
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
          <Title title='Featured Vehicles' placement='right' />
          {loading ? <Loading /> : <GridContainer>{vehicles}</GridContainer>}
        </Wrapper>
      </StyledSection>
    );
  }
}
