import React from 'react';
import styled from 'styled-components';
import viewport from '../styles/media';

const StyledWrapper = styled.div`
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;

  @media ${viewport[7]} {
    width: 90%;
  }
`;

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
