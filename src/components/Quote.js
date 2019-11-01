import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Wrapper from './Wrapper';

const StyledIcon = styled(Icon)`
  display: inline-block;
  fill: #fff;
  width: 2.25em !important;
`;

const StyledWrapper = styled(Wrapper)`
  & .quote {
    max-width: 700px;
    margin: 2em 0;
    margin-left: auto;
    background: rgba(0, 0, 0, 0.54);
    padding: 1.25em;

    & .quote-text {
      letter-spacing: 0.4px;
      line-height: 1.8;
      word-spacing: 0.7px;
    }

    & .quote-footer {
      /* font-style: italic; */
      margin-top: 0.5em;
      font-weight: 300;
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
        <StyledIcon>{icon}</StyledIcon>
        <footer className='quote-footer'>{footer}</footer>
      </blockquote>
    </StyledWrapper>
  );
}
