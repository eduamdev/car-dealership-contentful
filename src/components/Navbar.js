import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import Wrapper from '../components/Wrapper';
import viewport from '../styles/media';
import Link from '../components/Link';

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
    color: #fff;
    font-size: 1.5em;
    font-weight: 300;
    letter-spacing: 0.04em;
    display: none;

    @media ${viewport[7]} {
      display: block;
    }
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const StyledListItem = styled.li`
  padding: 0 2em;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <StyledHeader>
        <Logo>
          <img src={logo} alt='Vehicle Dealership' />
          <span className='logoText'>
            <strong>V</strong>ehicle <strong>D</strong>ealership
          </span>
        </Logo>
        <span></span>
        <nav>
          <StyledList>
            <StyledListItem>
              <Link linkClass='nav-link' url='/'>
                Home
              </Link>
            </StyledListItem>
            <StyledListItem>
              <Link linkClass='nav-link' url='/vehicles'>
                Vehicles
              </Link>
            </StyledListItem>
          </StyledList>
        </nav>
      </StyledHeader>
    </Wrapper>
  );
}
