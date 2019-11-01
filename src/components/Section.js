import React from 'react';
import styled from 'styled-components';
import { viewport } from './Breakpoints';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  margin: 2em 0;

  @media ${viewport[9]} {
    margin: 2.5em 0;
  }

  @media ${viewport[12]} {
    margin: 3em 0;
  }
`;

const Section = ({ id, className, children }) => {
  return (
    <StyledSection id={id} className={className}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
