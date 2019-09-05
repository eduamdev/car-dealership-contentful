import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import viewport from '../styles/media';
import { twitter, github } from '../components/svg';
import Icon from '../components/Icon';
import theme from '../styles/theme';

const StyledFooter = styled.footer`
  background: ${theme.colors.blackMatte};
  color: ${theme.colors.lightGrey};
`;

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  border-top: 2px solid #fff;
  padding-top: 1em;

  & p {
    color: inherit;
    text-align: center;
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
    padding: 2em;
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
