import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  letter-spacing: 0.03em;
  transition: 0.4s;
  &.nav-link {
    color: #fff;
  }
  &.heroLink {
    padding: 0.5em 1.5em;
    border: 1px solid #fff;
    color: #fff;

    &:hover {
      color: #000;
      background: #fff;
    }
  }

  &.fs-lg {
    font-size: 1.3em;
  }
`;

export default function LinkItem({ children, linkClass, url }) {
  return (
    <StyledLink className={linkClass} to={url}>
      {children}
    </StyledLink>
  );
}
