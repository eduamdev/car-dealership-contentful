import React from 'react';
import styled from 'styled-components';
import data from '../content/data';
import theme from '../styles/theme';
import catalog from '../assets/images/catalog-1.jpg';
import viewport from '../styles/media';

const StyledHero = styled.section`
  min-height: calc(100vh - 66px);
  &.defaultHero {
    background: #000;
    /* background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(225, 225, 225, 0.1) 80%
      ),
      url(${
        data[0].fields.images[0].fields.file.url
      }) center/cover no-repeat; */
      background: url(${
        data[0].fields.images[0].fields.file.url
      }) center/cover no-repeat;
  }
  &.catalogHero {
    background: ${theme.colors.mainBlack};
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 35, 0.2) 70%
      ),
      url(${catalog}) center/cover no-repeat;
  }

  &.quote {
    background: ${theme.colors.mainBlack};
    min-height: 12em;
    background: radial-gradient( circle, rgba(95,30,15,0.95) 0%, ${
      theme.colors.mainBlack
    } 50% );

    @media ${viewport[7]}{
      background: linear-gradient( 125deg, ${
        theme.colors.mainBlack
      } 70%, rgba(95,30,15,0.95) 98% );
    }

    & blockquote {
      color: ${theme.colors.lightGrey};
      font-size: 1.3em;
      font-weight: 200;
      letter-spacing: -0.2px;
      line-height: 1.5;
      text-align: right;

      & footer {
        font-style: italic;
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
