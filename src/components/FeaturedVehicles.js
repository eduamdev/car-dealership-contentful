import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Vehicle from './Vehicle';
import Title from './Title';

const StyledSection = styled.section`
  background: ${theme.colors.blackMatte};
  background: linear-gradient(
    180deg,
    rgba(35, 35, 35, 0.9) 0%,
    rgba(35, 35, 35, 1) 100%
  );
`;

const FlexContainer = styled.div`
  margin-top: 4em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export default function FeaturedVehicles() {
  return (
    <StyledSection>
      <Wrapper>
        <Title title='Featured Vehicles' placement='right' />
      </Wrapper>
      <Vehicle></Vehicle>
    </StyledSection>
  );
}
