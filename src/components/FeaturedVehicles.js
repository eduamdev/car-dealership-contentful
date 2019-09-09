import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Vehicle from './Vehicle';
import Title from './Title';
import theme from '../styles/theme';

const StyledSection = styled.section`
  background: ${theme.colors.mainBlack};
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
