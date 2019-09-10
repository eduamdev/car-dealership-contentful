import React, { useContext } from 'react';
import { VehicleContext } from '../context';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Modal, BackDrop } from './Modal';
import viewport from '../styles/media';

const StyledSection = styled.section`
  color: #fff;
  width: 100%;

  @media ${viewport[9]} {
    padding: 0.1em;
    align-self: stretch;
    margin-top: 3em;
  }
`;

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid ${theme.colors.mediumGrey};
  padding: 1em 0;
  border-radius: 2px;

  @media ${viewport[9]} {
    padding: 2em;
    justify-content: stretch;
    border: 1px solid ${theme.colors.mediumGrey};
  }
`;

const FilterButton = styled.span`
  display: none;

  &.allFilters {
    cursor: pointer;
    padding: 0.4em 1.4em;
    border-radius: 2px;
    font-size: 1.05em;
    font-weight: 200;
    letter-spacing: 0.5px;
    color: ${theme.colors.lightGrey};
    background: transparent;
    border: 1px solid ${theme.colors.mediumGrey};
    border-radius: 4px;
    display: block;

    @media ${viewport[9]} {
      display: none;
    }

    &:hover,
    &:focus {
      background-color: ${theme.colors.darkGreyAlt};
    }
  }

  @media ${viewport[9]} {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-gap: 0.3em 0;
    letter-spacing: -0.15px;

    &:not(:last-child) {
      margin-bottom: 2em;
    }

    & .filter-label {
      color: ${theme.colors.lightGrey};
      font-size: 1em;
    }

    & .filter-select {
      /* cursor: pointer; */
      padding: 0.25em 0.75em;
      font-size: 0.95em;
      background: ${theme.colors.warmBlack};
      color: ${theme.colors.lightGrey};
      outline-color: ${theme.colors.mediumGrey};
    }

    & .checkbox input[type='checkbox'] {
      opacity: 0;
      display: none;
    }

    & .checkbox label {
      position: relative;
      display: inline-block;
      cursor: pointer;
      /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
      padding-left: 28px;
    }

    & .checkbox label::before,
    & .checkbox label::after {
      position: absolute;
      content: '';

      /*Needed for the line-height to take effect*/
      display: inline-block;
    }

    /*Outer box of the fake checkbox*/
    & .checkbox label::before {
      height: 16px;
      width: 16px;

      border: 1px solid;
      left: 0px;

      /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
     *to vertically center it.
     */
      /* top: 3px; */
    }

    /*Checkmark of the fake checkbox*/
    & .checkbox label::after {
      height: 5px;
      width: 9px;
      border-left: 2px solid;
      border-bottom: 2px solid;

      transform: rotate(-45deg);

      left: 4px;
      top: 4px;
    }

    /*Hide the checkmark by default*/
    & .checkbox input[type='checkbox'] + label::after {
      content: none;
    }

    /*Unhide on the checked state*/
    & .checkbox input[type='checkbox']:checked + label::after {
      content: '';
    }

    /*Adding focus styles on the outer-box of the fake checkbox*/
    & .checkbox input[type='checkbox']:focus + label::before {
      outline: ${theme.colors.mediumGrey} auto 5px;
    }
  }
`;

export default function VehicleFilter() {
  const context = useContext(VehicleContext);
  const { modalIsOpen, handleModal } = context;

  return (
    <StyledSection>
      {modalIsOpen && <BackDrop onClick={handleModal}></BackDrop>}
      <GridContainer>
        <FilterButton className='allFilters' onClick={handleModal}>
          Filters
        </FilterButton>
        <FilterButton>
          <label className='filter-label' htmlFor='lol'>
            Type
          </label>
          <select className='filter-select' name='' id='lol'>
            <option value=''>Lorem, ipsum.</option>
            <option value=''>Lorem, ipsum.</option>
            <option value=''>Lorem, ipsum.</option>
          </select>
        </FilterButton>
        <FilterButton>
          <label className='filter-label' htmlFor='lol'>
            Color
          </label>
          <select className='filter-select' name='' id='lol'>
            <option value=''>Lorem, ipsum.</option>
            <option value=''>Lorem, ipsum.</option>
            <option value=''>Lorem, ipsum.</option>
          </select>
        </FilterButton>
        <FilterButton>
          <label className='filter-label' htmlFor='lol'>
            Capacity
          </label>
          <select className='filter-select' name='' id='lol'>
            <option value=''>Lorem, ipsum.</option>
            <option value=''>Lorem, ipsum.</option>
            <option value=''>Lorem, ipsum.</option>
          </select>
        </FilterButton>
        <FilterButton>
          <div className='checkbox'>
            <input type='checkbox' id='checkbox_1' />
            <label htmlFor='checkbox_1'>Air Conditioner</label>
          </div>
        </FilterButton>
      </GridContainer>
      <Modal className='modal' show={modalIsOpen} close={handleModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit
          amet aliquam.
        </p>
      </Modal>
    </StyledSection>
  );
}
