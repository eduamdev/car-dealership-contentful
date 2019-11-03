import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Link from './Link';
import logo from '../assets/images/logo.png';
import { book } from './svg';
import { viewport } from './Breakpoints';

const StyledHeader = styled.header`
  & .header-grid {
    display: grid;
    grid-template-areas: 'logo . nav';
    align-items: center;
    justify-content: center;
    grid-template-rows: 1fr;
    grid-gap: 1em;
    grid-template-columns: max-content 1fr max-content;
    min-height: 100px;

    & .header-grid__logo {
      grid-area: logo;

      & .header-grid__logo-link {
        display: flex;
        align-items: center;
        justify-content: center;

        & .header-grid__logo-icon {
          margin-right: 20px;
        }

        & .header-grid__logo-text {
          color: #fff;
          font-size: 1.6em;
          font-family: 'Libre Baskerville', serif;
          font-style: italic;
        }
      }
    }

    & .header-grid__nav {
      grid-area: nav;

      & .header-grid__nav__link {
        letter-spacing: 1.1px;
        color: #ddd;
        fill: #ddd;
        font-size: 1.1em;
        font-weight: 400;
        display: block;
        text-align: center;
        padding: 0.5em 0;
        opacity: 1;

        @media ${viewport[7]} {
          padding: 0.7em 1.4em;
          font-size: 1.25em;

          &:hover,
          &:focus {
            opacity: 0.75;
          }
        }

        & .header-grid__nav__link__svg-container {
          margin-right: 10px;

          & svg {
            vertical-align: middle;
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <div className='header-grid'>
          <div className='header-grid__logo'>
            <Link linkClass='header-grid__logo-link' url='/'>
              <img src={logo} className='header-grid__logo-icon' alt='Logo' />
              <span className='header-grid__logo-text'>Vehicles.</span>
            </Link>
          </div>
          <nav className='header-grid__nav'>
            <ul>
              <li>
                <Link
                  linkClass='header-grid__nav__link nav-link'
                  url='/catalog'
                >
                  <span className='header-grid__nav__link__svg-container'>
                    {book}
                  </span>
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
