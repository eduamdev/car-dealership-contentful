import React from 'react';
import styled from 'styled-components';
import { viewport } from './Breakpoints';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 92.5%;
  padding: 2em 10px;

  @media ${viewport[7]} {
    max-width: 90%;
  }

  @media ${viewport[9]} {
    max-width: 87.5%;
    padding: 2em 0;
  }

  @media ${viewport[12]} {
    max-width: 1440px;
    width: 90%;
    /* padding-left: 3rem;
    padding-right: 3rem; */
  }
`;

const Wrapper = ({ className, children }) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
};

Wrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Wrapper;
