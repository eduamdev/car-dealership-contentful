import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import viewport from '../styles/media';
import Vehicle from './Vehicle';

const StyledSection = styled.section`
  background: ${theme.colors.blackMatte};
  background: linear-gradient(
    180deg,
    rgba(35, 35, 35, 0.9) 0%,
    rgba(35, 35, 35, 1) 100%
  );
`;

const FlexContainer = styled.div`
  margin-top: 8em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 3em;
  color: #000;
  padding: 0.1em 0.5em;
  background: #fff;
  display: inline;
  text-align: left;
  border-bottom: 15px solid ${theme.colors.brightRed};

  @media ${viewport[7]} {
    font-size: 4em;
  }
`;

export default function FeaturedVehicles() {
  return (
    <StyledSection>
      <Wrapper>
        <FlexContainer>
          <Title>Featured Vehicles</Title>
        </FlexContainer>
      </Wrapper>
      <Vehicle></Vehicle>
    </StyledSection>
  );
}
