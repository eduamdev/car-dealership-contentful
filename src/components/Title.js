import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import viewport from '../styles/media';

const Container = styled.div`
  display: grid;
  align-items: center;
  margin: 8em 0 4em 0;
  grid-template-columns: 1fr;

  &.left {
    justify-content: start;
  }

  &.right {
    justify-content: end;
  }

  @media ${viewport[7]} {
    grid-template-columns: auto;
  }
`;

const StyledTitle = styled.h2`
  color: ${theme.colors.babyPowder};
  padding: 0.1em 0.5em;
  display: inline;
  border-bottom: 4px solid ${theme.colors.brightRed};
  font-size: 3em;

  @media ${viewport[7]} {
    font-size: 4em;
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
