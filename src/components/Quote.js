import React from 'react';
import Hero from './Hero';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import viewport from '../styles/media';

const GridContainer = styled.div`
  min-height: 220px;
  display: grid;
  grid-template-areas: 'quote';
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: end;

  @media ${viewport[7]} {
    min-height: 240px;
    grid-template-areas: '. quote';
    grid-template-columns: 1fr 3fr;
  }

  & blockquote {
    grid-area: quote;
    padding: 0.5em 1em;
    background: rgba(0, 0, 0, 0.65);
    border-radius: 2px;

    @media ${viewport[7]} {
      padding: 1em 2.5em;
    }
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
