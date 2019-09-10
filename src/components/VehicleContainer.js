import React from 'react';
import VehicleFilter from './VehicleFilter';
import VehicleList from './VehicleList';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import theme from '../styles/theme';
import viewport from '../styles/media';

const Container = styled.div`
  display: grid;
  align-items: start;
  justify-content: center;
  grid-template-areas:
    'filter'
    'list';
  grid-template-columns: 1fr;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
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

export default function VehicleContainer() {
  return (
    <Wrapper>
      <Container>
        <StyledFilter></StyledFilter>
        <StyledList></StyledList>
      </Container>
    </Wrapper>
  );
}
