import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import viewport from '../styles/media';
import Link from '../components/Link';
import defaultImg from '../assets/images/placeholder.jpg';
import PropTypes from 'prop-types';
import { formatMoney } from '../utils/utils';

const Item = styled.article`
  background: ${theme.colors.darkGreyAlt};
  margin: 0;
  text-align: center;
  border-radius: 4px;
  position: relative;
  height: 150px;
  overflow: hidden;
  display: grid;

  @media ${viewport[7]} {
    height: 200px;
  }

  @media ${viewport[9]} {
    height: 240px;
  }

  &:hover .photo,
  &:focus .photo {
    transform: scale(1.15);
    transition: all 0.35s;
    /* opacity: 0.2; */
    filter: brightness(0.5);
  }

  &:hover .photo:before,
  &:focus .photo:before {
    display: block;
  }

  & .photo {
    border-radius: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black; /* fallback color */
    background-position: center;
    background-size: cover;
    filter: brightness(0.9);

    &:before {
      content: '';
      display: none;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(42, 26, 31, 0.4);
    }
  }

  & a {
    /* visibility: hidden; */
    transition: none;
  }

  &:focus a,
  &:hover a {
    /* visibility: visible; */
    transition: all 0.1s;
  }

  & .price-tag {
    position: absolute;
    top: 5%;
    left: 0;
    background-color: #254e70;
    color: #ddd;
    padding: 0.75em 1em;
    visibility: visible;
  }

  &:hover .price-tag,
  &:focus .price-tag {
    visibility: hidden;
  }

  & .name {
    position: absolute;
    bottom: 0;
    padding: 0.5em 1em;
    font-size: 1em;
    display: block;
    font-weight: 400;
    color: ${theme.colors.lightGrey};
    background: #0000005e;
    text-transform: capitalize;
    width: 100%;

    @media ${viewport[7]} {
      font-size: 1.1em;
      padding: 0.5em 1.2em;
    }
  }
`;

export default function Vehicle({ vehicle }) {
  const { name, slug, images, price } = vehicle;

  return (
    <>
      <Item>
        <Link linkClass='vehicleLink box-shadow' url={`/catalog/${slug}`}>
          <div
            className='photo'
            style={{ backgroundImage: `url(${images[0] || defaultImg})` }}
          />
          <span className='price-tag box-shadow'>$ {formatMoney(price)}</span>
          <span className='name'>{name}</span>
        </Link>
      </Item>
    </>
  );
}

Vehicle.propTypes = {
  vehicle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
