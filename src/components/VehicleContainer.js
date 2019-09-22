import React from 'react';
import VehicleFilter from './VehicleFilter';
import VehicleList from './VehicleList';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import viewport from '../styles/media';
import { withVehicleConsumer } from '../context';
import Title from './Title';
import Loading from './Loading';

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    'filter'
    'list';
  grid-template-columns: 1fr;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  grid-gap: 2em 0;

  @media ${viewport[9]} {
    grid-template-areas: 'filter list';
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 2em;
  }

  @media ${viewport[12]} {
    grid-template-columns: 1fr 3fr;
  }
`;
const StyledFilter = styled(VehicleFilter)`
  grid-area: filter;

  @media ${viewport[9]} {
    align-self: start;
  }
`;
const StyledList = styled(VehicleList)`
  grid-area: list;
  padding: 1em;
`;

function VehicleContainer({ context }) {
  const { loading, handleBodyClass, sortedVehicles, vehicles } = context;

  handleBodyClass('modal-open');

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <Wrapper>
        <Title title='Search Vehicles' placement='right' />
        <GridContainer>
          <StyledFilter vehicles={vehicles}></StyledFilter>
          <StyledList vehicles={sortedVehicles}></StyledList>
        </GridContainer>
      </Wrapper>
    </section>
  );
}

export default withVehicleConsumer(VehicleContainer);
