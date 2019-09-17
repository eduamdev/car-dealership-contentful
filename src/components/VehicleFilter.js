import React, { useContext } from 'react';
import { VehicleContext } from '../context';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Modal, BackDrop } from './Modal';
import viewport from '../styles/media';
import { formatMoney, getUnique } from '../utils/utils';

const StyledSection = styled.section`
  color: #fff;
  width: 100%;

  @media ${viewport[9]} {
    align-self: stretch;
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
      margin-bottom: 1em;
    }

    & .filter-label {
      color: ${theme.colors.lightGrey};
      font-size: 1em;

      & .price {
        color: ${theme.colors.lightGreen};
      }
    }

    & .filter-select {
      /* cursor: pointer; */
      padding: 0.1em 0.5em;
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

export default function VehicleFilter({ vehicles }) {
  const context = useContext(VehicleContext);
  const {
    modalIsOpen,
    handleModal,
    handleChange,
    type,
    brand,
    model,
    capacity,
    price,
    minPrice,
    maxPrice,
    rental
  } = context;

  let types = getUnique(vehicles, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let brands = getUnique(vehicles, 'brand');
  brands = ['all', ...brands];
  brands = brands.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let models = getUnique(vehicles, 'model');
  models = ['all', ...models];
  models = models.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let people = getUnique(vehicles, 'capacity');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <StyledSection>
      {modalIsOpen && <BackDrop onClick={handleModal}></BackDrop>}
      <GridContainer>
        <FilterButton className='allFilters' onClick={handleModal}>
          Filters
        </FilterButton>
        {/* price */}
        <FilterButton>
          <label className='filter-label' htmlFor='price'>
            Price <span className='price'>$ {formatMoney(price)}</span>
          </label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
          ></input>
        </FilterButton>
        {/* end price */}
        {/* select type */}
        <FilterButton>
          <label className='filter-label' htmlFor='type'>
            Type
          </label>
          <select
            className='filter-select'
            name='type'
            id='type'
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </FilterButton>
        {/* end select type */}
        {/* brand */}
        <FilterButton>
          <label className='filter-label' htmlFor='brand'>
            Brand
          </label>
          <select
            className='filter-select'
            name='brand'
            id='brand'
            value={brand}
            onChange={handleChange}
          >
            {brands}
          </select>
        </FilterButton>
        {/* end brand */}
        {/* model */}
        <FilterButton>
          <label className='filter-label' htmlFor='model'>
            Model
          </label>
          <select
            className='filter-select'
            name='model'
            id='model'
            value={model}
            onChange={handleChange}
          >
            {models}
          </select>
        </FilterButton>
        {/* end color */}
        {/* capacity */}
        <FilterButton>
          <label className='filter-label' htmlFor='capacity'>
            Capacity
          </label>
          <select
            className='filter-select'
            name='capacity'
            id='capacity'
            value={capacity}
            onChange={handleChange}
          >
            {people}
          </select>
        </FilterButton>
        {/* end capacity */}
        {/* rental */}
        <FilterButton>
          <div className='checkbox'>
            <input
              type='checkbox'
              id='rental'
              name='rental'
              checked={rental}
              onChange={handleChange}
            />
            <label htmlFor='rental'>Rental</label>
          </div>
        </FilterButton>
        {/* end rental */}
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
