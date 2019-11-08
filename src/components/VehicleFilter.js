import React, { useContext } from 'react';
import { VehicleContext } from '../context';
import styled from 'styled-components';
import { Modal, BackDrop } from './Modal';
import viewport from '../styles/media';
import { formatMoney, getUnique } from '../utils/utils';
import { filter, arrowD } from './svg';
import Button from './Button';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  &.filter {
    @media ${viewport[9]} {
      margin-top: 1em;
    }

    & .filter-button {
      padding: 1em;
      letter-spacing: 1px;
      font-size: 0.9em;
      line-height: 1.5;
      color: #ccc;
      background: transparent;
      border-radius: 2px;
      cursor: pointer;
      fill: #ddd;
      margin: 1.5em 0;
      border: 1px solid #444;

      @media ${viewport[7]} {
        float: right;
      }

      &:focus,
      &:hover {
        border-color: #777;
      }

      & .filter-button__icon {
        width: 16px;
        display: inline-block;
        margin-right: 10px;

        @media ${viewport[9]} {
          width: 22px;
        }

        &.icon-right {
          margin-right: 0;
          margin-left: 10px;
          fill: #777;
          width: 12px;
        }

        & svg {
          vertical-align: middle;
          height: 100%;
          width: 100%;
        }
      }
    }

    & .filters-wrapper {
      max-width: 90%;
      margin: 0 auto;
      display: grid;
      grid-row-gap: 2em;
      justify-content: stretch;

      & .filter-grid__range,
      & .filter-grid__dropdown,
      & .filter-grid__checkbox-container {
        display: grid;
        align-items: center;
        justify-content: stretch;
      }

      & .filter-grid__range-label,
      & .filter-grid__dropdown-label,
      & .filter-grid__checkbox-container__checkbox-label {
        font-size: 1.1em;
        margin-bottom: 0.5em;
      }

      & .filter-grid__range {
        & .filter-grid__range-label {
          & > .filter-grid__range-current-price {
            color: hsla(207, 50%, 79%, 1);
            padding: 0.3em;
            margin-left: 10px;
          }
        }

        & .filter-grid__range-input {
        }

        & .filter-grid__range__min-max {
          display: grid;
          justify-content: end;
          margin-top: 0.3em;

          & .filter-grid__range-min-price,
          & .filter-grid__range-max-price {
            color: #ddd;
          }
        }
      }

      & .filter-grid__dropdown {
        & .filter-grid__dropdown-label {
        }

        & .filter-grid__dropdown-select {
          padding: 1.5em 1em;
          background: #222;
          color: #ddd;
          border: 1px solid #444;
          outline: none;
          font-size: 0.925em;
          letter-spacing: 0.5px;

          &:hover,
          &:focus {
            border-color: #777;
          }
        }
      }

      & .filter-grid__checkbox-container {
        & .filter-grid__checkbox-container__checkbox-label {
        }

        & .filter-grid__checkbox-container__checkbox-input {
        }
      }
    }
  }
`;

const VehicleFilter = ({ vehicles }) => {
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
  types = ['All', ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let brands = getUnique(vehicles, 'brand');
  brands = ['All', ...brands];
  brands = brands.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let models = getUnique(vehicles, 'model');
  models = ['All', ...models];
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
    <StyledSection className='filter'>
      {modalIsOpen && <BackDrop onClick={handleModal}></BackDrop>}

      <Button className='filter-button' clickHandler={handleModal}>
        <span className='filter-button__icon'>{filter}</span>
        Filters
        <span className='filter-button__icon icon-right'>{arrowD}</span>
      </Button>

      <Modal className='modal' show={modalIsOpen} close={handleModal}>
        <div className='filters-wrapper'>
          {/* price */}
          <div className={`filter-grid__range modal`}>
            <label className='filter-grid__range-label' htmlFor='price'>
              Price{' '}
              <span className='filter-grid__range-current-price'>
                $ {formatMoney(price)}
              </span>
            </label>
            <input
              type='range'
              className='filter-grid__range-input'
              name='price'
              min={minPrice}
              max={maxPrice}
              id='price'
              value={price}
              onChange={handleChange}
            ></input>
            <div className='filter-grid__range__min-max'>
              <span className='filter-grid__range-max-price'>
                $ {formatMoney(maxPrice)}
              </span>
            </div>
          </div>
          {/* end price */}
          {/* select type */}
          <div className={`filter-grid__dropdown modal`}>
            <label className='filter-grid__dropdown-label' htmlFor='type'>
              Type
            </label>
            <select
              className='filter-grid__dropdown-select'
              name='type'
              id='type'
              value={type}
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          {/* end select type */}
          {/* brand */}
          <div className={`filter-grid__dropdown modal`}>
            <label className='filter-grid__dropdown-label' htmlFor='brand'>
              Brand
            </label>
            <select
              className='filter-grid__dropdown-select'
              name='brand'
              id='brand'
              value={brand}
              onChange={handleChange}
            >
              {brands}
            </select>
          </div>
          {/* end brand */}
          {/* model */}
          <div className={`filter-grid__dropdown modal`}>
            <label className='filter-grid__dropdown-label' htmlFor='model'>
              Model
            </label>
            <select
              className='filter-grid__dropdown-select'
              name='model'
              id='model'
              value={model}
              onChange={handleChange}
            >
              {models}
            </select>
          </div>
          {/* end color */}
          {/* capacity */}
          <div className={`filter-grid__dropdown modal`}>
            <label className='filter-grid__dropdown-label' htmlFor='capacity'>
              Capacity
            </label>
            <select
              className='filter-grid__dropdown-select'
              name='capacity'
              id='capacity'
              value={capacity}
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          {/* end capacity */}
          {/* rental */}
          <div className={`filter-grid__checkbox-container modal`}>
            <div className='filter-grid__checkbox-container__checkbox'>
              <input
                type='checkbox'
                id='rental'
                className='filter-grid__checkbox-container__checkbox-input'
                name='rental'
                checked={rental}
                onChange={handleChange}
              />
              <label
                className='filter-grid__checkbox-container__checkbox-label'
                htmlFor='rental'
              >
                Rental
              </label>
            </div>
          </div>
          {/* end rental */}
        </div>
      </Modal>
    </StyledSection>
  );
};

VehicleFilter.propTypes = {
  vehicles: PropTypes.array.isRequired
};

export default VehicleFilter;
