import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import viewport from '../styles/media';

const Container = styled.div`
  display: grid;
  align-items: center;
  margin: 3em 0 1.8em 0;
  grid-template-columns: 1fr;

  &.left {
    justify-content: start;
  }

  &.right {
    justify-content: end;
  }

  @media ${viewport[7]} {
    grid-template-columns: auto;
    margin: 5em 0 2.75em 0;
  }
`;

const StyledTitle = styled.h2`
  color: ${theme.colors.babyPowder};
  padding: 0.15em 0;
  display: inline;
  border-bottom: 3px solid ${theme.colors.coralRed};
  font-size: 2.75em;
  letter-spacing: 0.3px;

  @media ${viewport[7]} {
    font-size: 3.5em;
  }

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }
`;

export default function Title({ title, placement }) {
  return (
    <Container className={placement}>
      <StyledTitle className={placement}>{title}</StyledTitle>
    </Container>
  );
}
