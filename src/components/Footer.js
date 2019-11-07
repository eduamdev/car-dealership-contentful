import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import { twitter, github } from '../components/svg';
import Icon from '../components/Icon';

const StyledFooter = styled.footer`
  background: #0c0c0c;
  margin-top: 5em;
  padding: 20px 0;

  & .footer-grid {
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;

    & p {
      margin: 1.5em 0 2em;
      letter-spacing: 0.5px;
    }

    & span {
      opacity: 0.7;
      margin-bottom: 1em;
      font-weight: 300;
      letter-spacing: 0.5px;
    }
  }

  & .footer-social {
    display: flex;
    align-items: center;
    justify-content: center;

    & a {
      padding: 1em;
      color: #ddd;
      fill: currentColor;
      font-weight: 400;
      opacity: 0.54;

      &:hover {
        /* color: #ddd; */
        opacity: 1;
      }

      & span {
        & svg {
          width: 1.75em;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <div className='footer-social'>
          <a
            href='https://twitter.com/edroamz'
            rel='nofollow noopener noreferrer'
            target='_blank'
            style={{ marginRight: '10px' }}
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
        </div>
        <div className='footer-grid'>
          <p>Designed and built by Eduardo Rodriguez</p>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </Wrapper>
    </StyledFooter>
  );
}
