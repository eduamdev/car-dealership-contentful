import React from 'react';
import styled from 'styled-components';
import data from '../content/data';
import theme from '../styles/theme';
import catalogImg from '../assets/images/catalog-1.jpg';
import viewport from '../styles/media';
import quoteImg from '../assets/images/quote-1.jpg';

const StyledHero = styled.section`
  min-height: 50vh;

  @media ${viewport[7]} {
    max-height: 100vh;
  }

  &.defaultHero {
    background: #000;
    background: url(${data[0].fields.images[0].fields.file.url}) center/cover
      no-repeat;
  }
  &.catalogHero {
    background: ${theme.colors.mainBlack};
    background: linear-gradient( 145deg,rgb(0,0,0) 45%,rgba(0,10,15,.35) 60%, rgba(0,0,0,.9) 95% ),
      url(${catalogImg}) center/cover no-repeat;
      margin-bottom: 2em;
  }

  &.vehicleHero {
    background: linear-gradient( 180deg, rgb(0, 0, 0) 5%, rgba(0,0,0,0.45) 70% ), url(${props =>
      props.img && props.img}) center/cover
    no-repeat;
  }

  &.vehicleHeroNotFound, &.errorHero{
    background: ${theme.colors.mainBlack};
    
    @media ${viewport[7]} {
      min-height: 100vh;
      /* max-width: 100vw;
      max-height: 100vh;
      width: 100vw;
      height: 100vh; */
    }
  }

  &.quote {
    background: ${theme.colors.mainBlack};
    min-height: 9em;
    margin-bottom: 2em;
    /* background: radial-gradient(
      circle,
      rgba(95, 30, 15, 0.95) 0%,
      ${theme.colors.mainBlack} 50%
    ); */

    background: linear-gradient( 180deg, rgb(0, 0, 0) 5%, rgba(0,0,0,0.55) 70% ), url(${quoteImg}) center/cover no-repeat;

    @media ${viewport[7]} {
      /* background: linear-gradient(
        125deg,
        ${theme.colors.mainBlack} 70%,
        rgba(95, 30, 15, 0.95) 98%
      ); */
      
    }

    & blockquote {
      color: #fff;
      font-size: 1em;
      font-weight: 200;
      letter-spacing: 0.2px;
      line-height: 1.75;
      text-align: right;
      /* font-style: italic; */

      & footer {
        /* font-style: italic; */
      }

      @media ${viewport[7]} {
        font-size: 1.08em;
        letter-spacing: 0.4px;
        line-height: 1.6;
      }
    }
  }
`;

export default function Hero({ children, hero, img }) {
  return (
    <StyledHero className={hero} img={img}>
      {children}
    </StyledHero>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero'
};
