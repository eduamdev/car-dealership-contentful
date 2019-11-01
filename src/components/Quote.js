import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Wrapper from './Wrapper';
import { viewport } from './Breakpoints';

const StyledIcon = styled(Icon)`
  display: inline-block;
  fill: #fff;
  width: 2.25em !important;
`;

const StyledWrapper = styled(Wrapper)`
  & .quote {
    max-width: 580px;
    margin-left: auto;
    background: rgba(0, 0, 0, 0.54);
    padding: 1.5em 1.25em;

    @media ${viewport[7]} {
      margin-right: 5vh;
    }

    & .quote-text {
      letter-spacing: 0.4px;
      line-height: 1.8;
      word-spacing: 0.7px;
      font-weight: 400;
    }

    & .quote-footer {
      /* font-style: italic; */
      margin-top: 0.5em;
      font-weight: 500;
      letter-spacing: 0.3px;
      opacity: 0.75;
    }
  }
`;

export default function Quote({ text, footer, icon }) {
  return (
    <StyledWrapper>
      <blockquote className='quote'>
        <p className='quote-text'>{text}</p>
        <footer className='quote-footer'>{footer}</footer>
        <StyledIcon>{icon}</StyledIcon>
      </blockquote>
    </StyledWrapper>
  );
}
