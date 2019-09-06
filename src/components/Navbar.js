import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import Wrapper from '../components/Wrapper';
import viewport from '../styles/media';
import Link from '../components/Link';
import theme from '../styles/theme';
import { menu } from '../components/svg';

const StyledHeader = styled.header`
  display: grid;
  grid-template-areas:
    'logo empty-space menu'
    'nav nav nav';
  align-items: center;
  justify-content: center;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  grid-template-columns: max-content 1fr max-content;
  min-height: 100px;

  @media ${viewport[7]} {
    grid-template-areas: 'logo empty-space nav';
  }
`;

const Logo = styled.div`
  grid-area: logo;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 1em;

  & .logoText {
    color: ${theme.colors.lightGrey};
    font-size: 1.3em;
    font-weight: 400;
    display: none;
    letter-spacing: 0.1px;
    text-transform: uppercase;

    @media ${viewport[7]} {
      display: block;
    }
  }
`;

const MenuButton = styled.span`
  grid-area: menu;
  color: #fff;
  background: transparent;
  cursor: pointer;
  border: none;

  & svg {
    width: 50px;
    fill: #fff;
    padding: 0.3em;
  }

  @media ${viewport[7]} {
    display: none;
  }
`;

const Nav = styled.nav`
  opacity: 0;
  grid-area: nav;
  visibility: hidden;

  &.show-nav {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    visibility: visible;
  }

  @media ${viewport[7]} {
    opacity: 1;
    margin: 0;
    visibility: visible;
  }
`;

const StyledList = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  /* grid-row-gap: 1em; */
  grid-column-gap: 0;
  background: ${theme.colors.matteBlack};
  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 2px;

  @media ${viewport[7]} {
    background: transparent;
    border: none;
    padding: 0;
    justify-content: space-around;
    grid-column-gap: 1em;
    grid-row-gap: 0;
    grid-template-columns: 1fr 1fr;
  }

  & li {
    border-bottom: 1px solid ${theme.colors.darkGrey};
    padding: 0.5em 0;

    &:hover {
      background: ${theme.colors.darkGreyAlt};
    }

    @media ${viewport[7]} {
      padding: 0;
      border: none;

      &:hover {
        background: transparent;
      }
    }
  }
`;

export default function Navbar() {
  const [isOpen, toggle] = useState(false);

  return (
    <Wrapper>
      <StyledHeader>
        <Logo>
          <img src={logo} alt='Vehicle Dealership' />
          <span className='logoText'>Vehicle Dealership</span>
        </Logo>
        <span></span>
        <MenuButton onClick={() => toggle(!isOpen)}>{menu}</MenuButton>
        <Nav className={isOpen && 'show-nav'}>
          <StyledList>
            <li>
              <Link linkClass='nav-link' url='/'>
                Home
              </Link>
            </li>
            <li>
              <Link linkClass='nav-link' url='/catalog'>
                Catalog
              </Link>
            </li>
          </StyledList>
        </Nav>
      </StyledHeader>
    </Wrapper>
  );
}
