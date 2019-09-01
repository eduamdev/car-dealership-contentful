import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
