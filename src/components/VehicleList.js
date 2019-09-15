import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Vehicle from '../components/Vehicle';
import viewport from '../styles/media';

const StyledSection = styled.section`
  background-color: ${theme.colors.mainBlack};
  color: ${theme.colors.lightGrey};

  display: grid;
  /* width: 80vw; */
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1rem;

  @media ${viewport[7]} {
    /* width: 85vw; */
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }

  @media ${viewport[9]} {
    padding: 0.1em;
    margin-top: 3em;
  }
`;

export default function VehicleList({ vehicles }) {
  if (vehicles.length === 0) {
    return (
      <div>
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
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
