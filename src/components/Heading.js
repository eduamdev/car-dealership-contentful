import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { viewport } from './Breakpoints';

// Default
const MIN_FONT_SIZE_EM = 3;

function getHeadingFontSize(rank, minFontSize, ratio = 1) {
  switch (rank) {
    case 1:
      return minFontSize;

    case 2:
      return minFontSize * (ratio / 1.85);

    case 3:
      return minFontSize * (ratio / 2.9);

    case 4:
      return minFontSize * (ratio / 3);

    case 5:
      return minFontSize * (ratio / 3.1);

    case 6:
      return minFontSize * (ratio / 3.2);

    default:
      return minFontSize;
  }
}

const StyledHeading = styled.div`
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  color: #ddd;
  text-align: left;
  font-weight: bold;
  line-height: ${({ rank }) => (rank > 3 ? '1.35' : '1.15')};
  font-size: ${({ rank }) => getHeadingFontSize(rank, MIN_FONT_SIZE_EM, 1)}em;

  /* Styles based on viewport size */
  @media ${viewport[7]} {
    font-size: ${({ rank }) =>
      getHeadingFontSize(rank, MIN_FONT_SIZE_EM * 1.2, 0.8)}em;
  }

  @media ${viewport[9]} {
    font-size: ${({ rank }) =>
      getHeadingFontSize(rank, MIN_FONT_SIZE_EM * 1.5, 0.65)}em;
  }

  @media ${viewport[12]} {
    font-size: ${({ rank }) =>
      getHeadingFontSize(rank, MIN_FONT_SIZE_EM * 1.5, 0.65)}em;
  }
`;

const Heading = ({ rank = 2, className, children }) => {
  if (rank <= 0) return <></>;
  rank = rank > 6 ? 6 : rank;

  return (
    <StyledHeading as={`h${rank}`} className={className} rank={rank}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  rank: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Heading;
