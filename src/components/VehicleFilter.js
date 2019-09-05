import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import theme from '../styles/theme';

const StyledSection = styled.section`
  background: ${theme.colors.blackMatte};
  color: #fff;
  border-bottom: 1px solid #555;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.75em auto;
`;

const FilterButton = styled.button`
  padding: 0.4em 1.4em;
  border-radius: 3px;
  font-size: 1.05em;
  font-weight: 200;
  letter-spacing: 0.5px;
  border: 1px solid #777;
  color: ${theme.colors.lightGrey};
  background: transparent;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 0.75em;
  }

  &:hover {
    background-color: #444;
  }
`;

export default function VehicleFilter() {
  return (
    <StyledSection>
      <Wrapper>
        <FlexContainer>
          <FilterButton>Type</FilterButton>
          <FilterButton>Price</FilterButton>
          <FilterButton>Color</FilterButton>
        </FlexContainer>
      </Wrapper>
    </StyledSection>
  );
}
