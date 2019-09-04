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
    font-size: 1.05em;
    font-weight: 200;
    text-transform: uppercase;
    display: block;
    text-align: center;
    padding: 0.7em 0;

    &:hover {
    }

    @media ${viewport[7]} {
      padding: 0.7em 1em;
    }
  }
  &.heroLink {
    padding: 0.75em 1.5em;
    border: 2px solid transparent;
    background: ${theme.colors.brightRed};
    color: #fff;
    font-size: 1.175em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover .icon {
      transform: translateX(25%);
    }

    &:hover {
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
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
