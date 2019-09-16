import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Vehicle from '../components/Vehicle';
import viewport from '../styles/media';

const GridSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & h3 {
    text-align: center;
    color: ${theme.colors.lightGrey};
    letter-spacing: 0.3px;
    font-size: 1.45em;
    font-weight: 400;
  }
`;

const StyledSection = styled.section`
  background-color: ${theme.colors.mainBlack};
  color: ${theme.colors.lightGrey};
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1rem;

  @media ${viewport[7]} {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }
`;

export default function VehicleList({ vehicles }) {
  if (vehicles.length === 0) {
    return (
      <GridSection>
        <h3>Unfortunately no vehicles matched your search parameters...</h3>
      </GridSection>
    );
  }

  return (
    <StyledSection>
      {vehicles.map(item => {
        return <Vehicle key={item.id} vehicle={item}></Vehicle>;
      })}
    </StyledSection>
  );
}
