import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import theme from '../styles/theme';

const StyledFooter = styled.footer`
  background: #fff;
`;

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-top: 3px solid #000;

  & p {
    color: #000;
  }
`;

export default function footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <GridContainer>
          <p>Designed and built by Eduardo Rodriguez</p>
        </GridContainer>
      </Wrapper>
    </StyledFooter>
  );
}
