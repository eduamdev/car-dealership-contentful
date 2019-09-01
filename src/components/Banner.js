import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Link from '../components/Link';
import viewport from '../styles/media';

const StyledBanner = styled.section`
  display: grid;
  align-items: center;
  justify-content: start;
  text-align: left;
  grid-row-gap: 3em;
  margin-top: 2em;

  @media ${viewport[7]} {
    margin-top: 4.5em;
  }
`;

const Title = styled.h1`
  color: white;
  font-weight: 300;
  line-height: 1.2em;
  font-size: 4em;
  margin: 0;
  /* letter-spacing: 0.05em; */
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.8em;
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
      </StyledBanner>
    </Wrapper>
  );
}
