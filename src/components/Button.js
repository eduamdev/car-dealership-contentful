import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button``;

const Button = ({ type = 'button', className, children, clickHandler }) => {
  return (
    <StyledButton as={type} className={className} onClick={clickHandler}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Button;
