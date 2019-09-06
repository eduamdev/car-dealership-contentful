import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Vehicle from './Vehicle';
import Title from './Title';

const StyledSection = styled.section`
  background: #000;
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
