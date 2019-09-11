import React from 'react';
import styled from 'styled-components';
import data from '../content/data';
import theme from '../styles/theme';
import catalog from '../assets/images/catalog-1.jpg';
import viewport from '../styles/media';

const StyledHero = styled.section`
  min-height: 50vh;

  @media ${viewport[7]} {
    min-height: 100vh;
  }

  &.defaultHero {
    background: #000;
    background: url(${data[0].fields.images[0].fields.file.url}) center/cover
      no-repeat;
  }
  &.catalogHero {
    background: ${theme.colors.mainBlack};
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.95) 15%,
        rgba(0, 0, 15, 0.15) 70%
      ),
      url(${catalog}) center/cover no-repeat;
  }

  &.quote {
    background: ${theme.colors.mainBlack};
    min-height: 10em;
    background: radial-gradient(
      circle,
      rgba(95, 30, 15, 0.95) 0%,
      ${theme.colors.mainBlack} 50%
    );

    @media ${viewport[7]} {
      background: linear-gradient(
        125deg,
        ${theme.colors.mainBlack} 70%,
        rgba(95, 30, 15, 0.95) 98%
      );
    }

    & blockquote {
      color: ${theme.colors.lightGrey};
      font-size: 1.1em;
      font-weight: 200;
      letter-spacing: -0.2px;
      line-height: 1.5;
      text-align: right;
      /* font-style: italic; */

      & footer {
        /* font-style: italic; */
      }

      @media ${viewport[7]} {
        font-size: 1.2em;
      }
    }
  }
`;

export default function Hero({ children, hero }) {
  return <StyledHero className={hero}>{children}</StyledHero>;
}

Hero.defaultProps = {
  hero: 'defaultHero'
};
