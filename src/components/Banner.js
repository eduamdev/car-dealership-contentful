import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Link from '../components/Link';
import viewport from '../styles/media';
import theme from '../styles/theme';
import Icon from '../components/Icon';

const StyledBanner = styled.div`
  display: grid;
  align-items: center;
  justify-content: start;
  text-align: left;
  /* height: 600px; */
  margin: 2em auto;

  @media ${viewport[7]} {
    margin: 3em auto;
  
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
  font-size: 2.8em;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1.4;
  margin: 0;

  @media ${viewport[7]} {
    font-size: 3.7em;
  }

  @media ${viewport[9]} {
    font-size: 4.8em;
  }
`;

const Subtitle = styled.p`
  color: ${theme.colors.lightGrey};
  font-size: 1.15em;
  font-weight: 200;
  letter-spacing: -0.1px;

  @media ${viewport[7]} {
    font-size: 1.3em;
  }
`;

const LinkContainer = styled.div`
  &.center {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;

    & .icon {
      margin-left: 0.4em;
      fill: #fff;
      transition: 0.1s ease-in;
    }
  }
`;

export default function Banner({
  children,
  title,
  titleClass,
  subtitle,
  link,
  icon
}) {
  return (
    <Wrapper>
      <StyledBanner className='banner'>
        <GridContainer>
          <Title className={titleClass}>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {link && (
            <LinkContainer className='center'>
              <Link linkClass={link.linkClass} url={link.url}>
                <span>{link.label}</span>
                {icon && <Icon className='icon'>{icon}</Icon>}
              </Link>
            </LinkContainer>
          )}
          {children}
        </GridContainer>
      </StyledBanner>
    </Wrapper>
  );
}
