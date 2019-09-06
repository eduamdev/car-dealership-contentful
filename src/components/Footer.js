import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import viewport from '../styles/media';
import { twitter, github } from '../components/svg';
import Icon from '../components/Icon';
import theme from '../styles/theme';

const StyledFooter = styled.footer`
  background: rgb(5, 5, 5);
  color: ${theme.colors.lightGrey};
`;

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  border-top: 2px solid ${theme.colors.darkGrey};
  padding-top: 1em;

  & p {
    color: inherit;
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 1em;
    padding: 0.75em 0 0 0;
    font-weight: 200;
    line-height: 1.3;
    /* margin-top: 1em; */

    @media ${viewport[7]} {
      font-size: 1.1em;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    display: inherit;
    transition: all 0.2s ease;
    padding: 1em 1em 2em 0;
    fill: ${theme.colors.lightGrey};

    &:hover {
      transform: translatey(-5%);
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <GridContainer>
          <p>Designed and built by Eduardo Rodriguez</p>
          <IconContainer>
            <a
              href='https://twitter.com/edroamz'
              rel='nofollow noopener noreferrer'
              target='_blank'
            >
              <Icon>{twitter}</Icon>
            </a>
            <a
              href='https://github.com/edroamz'
              rel='nofollow noopener noreferrer'
              target='_blank'
            >
              <Icon>{github}</Icon>
            </a>
          </IconContainer>
        </GridContainer>
      </Wrapper>
    </StyledFooter>
  );
}
