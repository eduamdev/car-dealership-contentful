import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Link from '../components/Link';
import viewport from '../styles/media';
import theme from '../styles/theme';

const StyledBanner = styled.div`
  display: grid;
  align-items: center;
  justify-content: start;
  text-align: left;
  height: 600px;

  @media ${viewport[7]} {
    /* margin-top: 4.5em; */
  }
`;

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-row-gap: 3em;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 4.2em;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin: 0;

  @media ${viewport[7]} {
    font-size: 6em;
  }
`;

const Subtitle = styled.p`
  color: ${theme.colors.lightGrey};
  font-size: 1.55em;
  font-weight: 200;
  letter-spacing: -0.1px;
`;

const LinkContainer = styled.div`
  &.center {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export default function Banner({ children, title, subtitle, link }) {
  return (
    <Wrapper>
      <StyledBanner className='banner'>
        <GridContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {link && (
            <LinkContainer className='center'>
              <Link linkClass='heroLink' url={link.url}>
                {link.label}
              </Link>
            </LinkContainer>
          )}
          {children}
        </GridContainer>
      </StyledBanner>
    </Wrapper>
  );
}
