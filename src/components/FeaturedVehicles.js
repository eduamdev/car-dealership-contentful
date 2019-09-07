import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Vehicle from './Vehicle';
import Title from './Title';

const StyledSection = styled.section`
  background: rgb(5, 5, 5);
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
