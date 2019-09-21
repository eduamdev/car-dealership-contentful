import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import viewport from '../styles/media';
import { twitter, github } from '../components/svg';
import Icon from '../components/Icon';
import theme from '../styles/theme';

const StyledFooter = styled.footer`
  background: ${theme.colors.mainBlack};
  color: ${theme.colors.lightGrey};
  margin-top: 5em;
`;

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  border-top: 1px solid ${theme.colors.darkGrey};
  padding-top: 1em;

  & p {
    color: inherit;
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 0.85em;
    padding: 0.75em 0 0 0;
    font-weight: 200;
    line-height: 1.3;
    /* margin-top: 1em; */

    @media ${viewport[7]} {
      font-size: 0.9em;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    display: inherit;
    padding: 1em 1em 2em 0;
    fill: ${theme.colors.lightGrey};
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
              <Icon className='social'>{twitter}</Icon>
            </a>
            <a
              href='https://github.com/edroamz'
              rel='nofollow noopener noreferrer'
              target='_blank'
            >
              <Icon className='social'>{github}</Icon>
            </a>
          </IconContainer>
        </GridContainer>
      </Wrapper>
    </StyledFooter>
  );
}
