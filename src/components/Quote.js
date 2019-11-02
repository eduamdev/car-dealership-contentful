import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Wrapper from './Wrapper';
import { viewport } from './Breakpoints';

const StyledIcon = styled(Icon)`
  display: inline-block;
  fill: #ddd;
  width: 2em !important;
`;

const StyledWrapper = styled(Wrapper)`
  padding-top: 0;
  & .quote {
    max-width: 580px;
    margin-left: auto;
    background: rgba(0, 0, 0, 0.54);
    padding: 1.5em 1.25em;

    & .quote-text {
      letter-spacing: 0.4px;
      line-height: 1.8;
      word-spacing: 0.7px;
      font-weight: 400;
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
    }

    & .quote-footer {
      /* font-style: italic; */
      margin-top: 0.5em;
      font-weight: 500;
      letter-spacing: 0.3px;
      color: #fff;
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
