import React from 'react';
import styled from 'styled-components';
import { viewport } from './Breakpoints';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.45px;
  line-height: 1.75;
  margin-bottom: 1em;
  color: hsla(255, 100%, 100%, 0.8);

  @media ${viewport[7]} {
    letter-spacing: 0.6px;
  }

  @media ${viewport[9]} {
    font-size: 1.05em;
    letter-spacing: 0.5px;
    line-height: 1.85;
  }

  @media ${viewport[12]} {
    font-size: 1.015em;
    letter-spacing: 0.4px;
    line-height: 1.6;
    word-spacing: 1px;
  }
`;

P.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default function P({ className, children }) {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
}
