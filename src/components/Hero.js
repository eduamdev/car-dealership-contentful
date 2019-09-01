import React from 'react';
import styled from 'styled-components';
import data from '../content/data';

const StyledHero = styled.div`
  &.defaultHero {
    min-height: calc(100vh - 66px);
    background: #000;
    background: url(${data[0].fields.images[0].fields.file.url}) center/cover
      no-repeat;
  }
`;

export default function Hero({ children, hero }) {
  return <StyledHero className={hero}>{children}</StyledHero>;
}

Hero.defaultProps = {
  hero: 'defaultHero'
};
