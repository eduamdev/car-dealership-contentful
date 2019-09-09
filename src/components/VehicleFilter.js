import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import theme from '../styles/theme';
import { Modal, BackDrop } from './Modal';

const StyledSection = styled.section`
  background: ${theme.colors.mainBlack};
  color: #fff;
  border-bottom: 1px solid ${theme.colors.mediumGrey};
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
  border: 1px solid ${theme.colors.mediumGrey};
  color: ${theme.colors.lightGrey};
  background: transparent;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 0.75em;
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.darkGreyAlt};
  }
`;

export default function VehicleFilter() {
  const [modalIsShowing, openModal] = useState(false);

  return (
    <StyledSection>
      {modalIsShowing ? (
        <BackDrop onClick={() => openModal(false)}></BackDrop>
      ) : null}
      <Wrapper>
        <FlexContainer>
          <FilterButton onClick={() => openModal(true)}>Type</FilterButton>
          <FilterButton>Price</FilterButton>
          <FilterButton>Color</FilterButton>
        </FlexContainer>
      </Wrapper>
      <Modal
        className='modal'
        show={modalIsShowing}
        close={() => openModal(false)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit
        amet aliquam.
      </Modal>
    </StyledSection>
  );
}
