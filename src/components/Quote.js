import React from 'react';
import Hero from './Hero';
import Wrapper from './Wrapper';

export default function Quote({ children }) {
  return (
    <Hero hero='quote'>
      <Wrapper>{children}</Wrapper>
    </Hero>
  );
}
