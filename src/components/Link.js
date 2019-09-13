import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';
import viewport from '../styles/media';
import { ripple } from '../styles/animation';

const StyledLink = styled(Link)`
  letter-spacing: -0.1px;
  transition: 0.3s;
  border-radius: 2px;

  &.ripple {
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.5);
      opacity: 0;
      border-radius: 100%;
      transform: scale(1, 1) translate(-50%);
      transform-origin: 50% 50%;
    }

    &:focus:not(:active)::after {
      animation: ${ripple} 0.8s ease;
    }
  }

  &.nav-link {
    letter-spacing: 1px;
    color: #fff;
    font-size: 1em;
    font-weight: 200;
    text-transform: uppercase;
    display: block;
    text-align: center;
    padding: 0.5em 0;

    @media ${viewport[7]} {
      padding: 0.7em 1em;
      font-size: 1.1em;
      letter-spacing: 0.3px;

      &:hover,
      &:focus {
        color: ${theme.colors.grey};
      }
    }
  }
  &.heroLink,
  &.heroLinkReverse {
    padding: 0.75em 1.5em;
    border: 2px solid transparent;
    background: ${theme.colors.coralRed};
    color: #fff;
    font-size: 1.175em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover .icon,
    &:focus .icon {
      transform: translateX(25%);
    }

    @media ${viewport[7]} {
      font-size: 1.4em;
    }
  }

  &.heroLinkReverse {
    border-color: ${theme.colors.lightGrey};
    background-color: transparent;
    flex-direction: row-reverse;

    &:hover .icon,
    &:focus .icon {
      transform: translateX(-25%);
    }
  }

  &.vehicleLink {
    color: ${theme.colors.richBlack};
    background: ${theme.colors.lightGrey};
    border: 1px solid;
    border-color: transparent;
    padding: 0.8em 1.6em;
    font-size: 1em;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60%;
    /* transform: scale(0); */

    &:hover,
    &:focus {
      color: ${theme.colors.lightGrey};
      border-color: ${theme.colors.lightGrey};
      background: ${theme.colors.coralRed};
    }

    @media ${viewport[7]} {
      padding: 1em 2em;
      font-size: 1.1em;
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
