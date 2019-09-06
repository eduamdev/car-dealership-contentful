import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import theme from '../styles/theme';
import Modal from './Modal';

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

const FilterButton = styled.span`
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

const BackDrop = styled.div`
  background-color: rgba(35, 35, 35, 0.5);
  height: 100%;
  position: fixed;
  top: 0;
  transition: all 1.3s;
  width: 100%;
  z-index: 100;
`;

export default function VehicleFilter() {
  const [isShowing, openModal] = useState(false);

  return (
    <StyledSection>
      {isShowing ? (
        <BackDrop onClick={() => openModal(false)}></BackDrop>
      ) : null}
      <Wrapper>
        <FlexContainer>
          <FilterButton onClick={() => openModal(true)}>Type</FilterButton>
          <FilterButton>Price</FilterButton>
          <FilterButton>Color</FilterButton>
        </FlexContainer>
      </Wrapper>
      <Modal className='modal' show={isShowing} close={() => openModal(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit
        amet aliquam.
      </Modal>
    </StyledSection>
  );
}
