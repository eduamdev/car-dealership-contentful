import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Link from './Link';
import Icon from './Icon';
import Heading from './Heading';
import P from './Paragraph';
import Section from './Section';

const StyledSection = styled(Section)`
  & .banner-flex {
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & .banner-flex__title {
      margin-bottom: 0.35em;
      font-weight: 900;
      letter-spacing: 1px;
    }

    & .banner-flex__subtitle {
      margin-bottom: 3em;
    }

    & .banner-flex__link {
      font-weight: 400;
      padding: 0.8em 1.5em;
      border-radius: 4px;

      & svg {
        vertical-align: middle;
      }
    }
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

function showLink(link, icon) {
  const { linkClass, label, url } = link;

  return (
    <LinkContainer className='center'>
      <Link linkClass={`banner-flex__link ${linkClass}`} url={url}>
        <span>{label}</span>
        {icon && <Icon className='icon md'>{icon}</Icon>}
      </Link>
    </LinkContainer>
  );
}

const Banner = ({ children, title, titleClass, subtitle, link, icon }) => (
  <StyledSection>
    <Wrapper>
      <div className='banner-flex'>
        <Heading rank={1} className={`banner-flex__title ${titleClass}`}>
          {title}
        </Heading>
        {subtitle && <P className='banner-flex__subtitle'>{subtitle}</P>}
        {link && showLink(link, icon)}
        {children}
      </div>
    </Wrapper>
  </StyledSection>
);

export default Banner;
