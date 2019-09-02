import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';
import viewport from '../styles/media';

const StyledLink = styled(Link)`
  letter-spacing: -0.1px;
  transition: 0.3s;

  &.nav-link {
    color: #fff;
    padding: 0.7em 1em;
    font-size: 1.05em;
    font-weight: 200;
    text-transform: uppercase;

    &:hover {
    }
  }
  &.heroLink {
    padding: 0.75em 1.5em;
    border: 2px solid #fff;
    color: #fff;
    font-size: 1.175em;
    text-transform: uppercase;

    &:hover {
      color: #000;
      background: #fff;
    }

    @media ${viewport[7]} {
      font-size: 1.4em;
    }
  }
`;

export default function LinkItem({ children, linkClass, url }) {
  return (
    <StyledLink className={linkClass} to={url}>
      {children}
    </StyledLink>
  );
}
