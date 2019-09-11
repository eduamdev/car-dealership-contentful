import React from 'react';
import Hero from './Hero';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import viewport from '../styles/media';

const GridContainer = styled.div`
  min-height: 250px;
  display: grid;
  align-items: center;
  justify-content: end;

  @media ${viewport[7]} {
    min-height: 370px;
  }
`;

export default function Quote({ children }) {
  return (
    <Hero hero='quote'>
      <Wrapper>
        <GridContainer>{children}</GridContainer>
      </Wrapper>
    </Hero>
  );
}
