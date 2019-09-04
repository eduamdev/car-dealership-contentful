import React from 'react';
import Hero from './Hero';
import Wrapper from './Wrapper';
import styled from 'styled-components';

const GridContainer = styled.div`
  min-height: 450px;
  display: grid;
  align-items: center;
  justify-content: end;
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
