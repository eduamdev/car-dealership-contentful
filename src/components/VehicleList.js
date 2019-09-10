import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Vehicle from '../components/Vehicle';
import viewport from '../styles/media';

const StyledSection = styled.section`
  background-color: ${theme.colors.mainBlack};
  color: ${theme.colors.lightGrey};

  @media ${viewport[9]} {
    padding: 0.1em;
    margin-top: 3em;
  }
`;

export default function VehicleList() {
  return (
    <StyledSection>
      <Vehicle></Vehicle>
    </StyledSection>
  );
}
