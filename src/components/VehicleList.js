import React from 'react';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import theme from '../styles/theme';
import Vehicle from '../components/Vehicle';

const StyledSection = styled.section`
  background-color: ${theme.colors.matteBlack};
  color: ${theme.colors.lightGrey};
`;

export default function VehicleList() {
  return (
    <StyledSection>
      <Wrapper>
        <Vehicle></Vehicle>
      </Wrapper>
    </StyledSection>
  );
}
