import React from 'react';
import styled from 'styled-components';
import data from '../content/data';
import theme from '../styles/theme';
import catalogImg from '../assets/images/catalog-1.jpg';
import viewport from '../styles/media';
import quoteImg from '../assets/images/quote-1.jpg';

const StyledHero = styled.section`
  &.defaultHero {
    background: #000;
    background: url(${data[0].fields.images[0].fields.file.url}) center/cover
      no-repeat;
  }
  &.catalogHero {
    background: ${theme.colors.mainBlack};
    background: linear-gradient(
        145deg,
        rgb(0, 0, 0) 45%,
        rgba(0, 10, 15, 0.35) 60%,
        rgba(0, 0, 0, 0.9) 95%
      ),
      url(${catalogImg}) center/cover no-repeat;
    margin-bottom: 2em;
  }

  &.vehicleHero {
    background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 5%,
        rgba(0, 0, 0, 0.45) 70%
      ),
      url(${props => props.img && props.img}) center/cover no-repeat;
  }

  &.vehicleHeroNotFound,
  &.errorHero {
    background: ${theme.colors.mainBlack};
    min-height: 100vh;
  }

  &.quote {
    background: ${theme.colors.mainBlack};
    min-height: 9em;
    background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 5%,
        rgba(0, 0, 0, 0.55) 70%
      ),
      url(${quoteImg}) center/cover no-repeat;

    & blockquote {
      font-size: 1em;
      font-weight: 200;
      letter-spacing: 0.2px;
      line-height: 1.75;
      text-align: right;

      @media ${viewport[7]} {
        font-size: 1.08em;
        letter-spacing: 0.4px;
        line-height: 1.6;
      }
    }
  }
`;

export default function Hero({ hero, img, children }) {
  return (
    <StyledHero className={hero} img={img}>
      {children}
    </StyledHero>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero'
};
