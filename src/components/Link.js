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

  &.heroLink,
  &.heroLinkReverse {
    padding: 0.75em 1.5em;
    border: 1px solid transparent;
    background: ${theme.colors.coralRed};
    color: #ddd;
    font-size: 0.95em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-around;
    letter-spacing: 0.2px;
    font-weight: 700;

    &:hover .icon,
    &:focus .icon {
      transform: translateX(35%);
    }

    @media ${viewport[7]} {
      font-size: 1.2em;
    }
  }

  &.heroLinkReverse {
    /* border-color: ${theme.colors.lightGrey}; */
    background-color: ${theme.colors.warmBlack};
    flex-direction: row-reverse;

    &:hover .icon,
    &:focus .icon {
      transform: translateX(-25%);
    }
  }

  &.vehicleLink {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export default function LinkItem({ children, linkClass, url }) {
  return (
    <StyledLink className={linkClass} to={url}>
      {children}
    </StyledLink>
  );
}
