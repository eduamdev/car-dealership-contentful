import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Wrapper from './Wrapper';

const StyledIcon = styled(Icon)`
  display: inline-block;
  fill: #ddd;
  width: 2em !important;
  margin-right: 10px;

  & svg {
    height: 100%;
    width: 100%;
    vertical-align: super;
  }
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
      line-height: 1.65;
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
      color: #ddd;
    }
  }
`;

export default function Quote({ text, footer, icon }) {
  return (
    <StyledWrapper>
      <blockquote className='quote'>
        <p className='quote-text'>
          <StyledIcon>{icon}</StyledIcon> {text}
        </p>
        <footer className='quote-footer'>{footer}</footer>
      </blockquote>
    </StyledWrapper>
  );
}
