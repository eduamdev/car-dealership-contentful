import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import Wrapper from '../components/Wrapper';
import viewport from '../styles/media';
import Link from '../components/Link';
import theme from '../styles/theme';

const StyledHeader = styled.header`
  display: grid;
  grid-template-areas: 'logo empty-space nav';
  align-items: center;
  justify-content: center;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  grid-template-columns: max-content 1fr max-content;
  height: 100px;

  &nav {
    grid-area: nav;
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

const StyledList = styled.ul`
  display: grid;
  align-items: center;
  justify-content: space-around;
  grid-column-gap: 1em;
  grid-template-columns: 1fr 1fr;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <StyledHeader>
        <Logo>
          <img src={logo} alt='Vehicle Dealership' />
          <span className='logoText'>Vehicle Dealership</span>
        </Logo>
        <span></span>
        <nav>
          <StyledList>
            <li>
              <Link linkClass='nav-link' url='/'>
                Home
              </Link>
            </li>
            <li>
              <Link linkClass='nav-link' url='/vehicles'>
                Vehicles
              </Link>
            </li>
          </StyledList>
        </nav>
      </StyledHeader>
    </Wrapper>
  );
}
