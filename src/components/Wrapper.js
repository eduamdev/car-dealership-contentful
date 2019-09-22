import React from 'react';
import styled from 'styled-components';
import viewport from '../styles/media';

const StyledWrapper = styled.div`
  width: 92%;
  margin: 0 auto;

  @media ${viewport[7]} {
    width: 88%;
  }

  @media ${viewport[9]} {
    width: 80%;
    max-width: 1440px;
  }
`;

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
