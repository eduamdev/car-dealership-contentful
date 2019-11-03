import React from 'react';
import styled from 'styled-components';
import { viewport } from './Breakpoints';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  font-size: 1.025em;
  font-weight: 400;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: 1.55;
  margin-bottom: 1em;
  color: hsla(255, 100%, 100%, 0.8);

  @media ${viewport[7]} {
    font-size: 1.05em;
    letter-spacing: 0.5px;
  }

  @media ${viewport[9]} {
    font-size: 1.1em;
    line-height: 1.7;
  }

  @media ${viewport[12]} {
    font-size: 1.125em;
    line-height: 1.5;
  }
`;

P.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default function P({ className, style, children }) {
  return (
    <StyledParagraph className={className} style={style}>
      {children}
    </StyledParagraph>
  );
}
