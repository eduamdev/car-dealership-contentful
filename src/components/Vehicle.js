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
  border: 1px solid #333;

  @media ${viewport[7]} {
    height: 200px;
  }

  @media ${viewport[9]} {
    height: 240px;
  }

  &:hover .photo,
  &:focus .photo {
    transform: scale(1.1);
    transition: all 0.3s;
    /* opacity: 0.25; */
    filter: sepia(1.5) grayscale(1) saturate(0.25);
  }

  &:hover .photo:before,
  &:focus .photo:before {
    display: block;
  }

  & .photo {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background-color: black; /* fallback color */
    /* background-image: url("${defaultImg}"); */
    background-position: center;
    background-size: cover;
    filter: saturate(1.25) contrast(1.05) brightness(0.8) sepia(0.25);

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
    visibility: hidden;
    transition: none;
  }

  &:focus a,
  &:hover a {
    visibility: visible;
    transition: all 0.1s;
  }

  & .price-tag {
    position: absolute;
    top: 0;
    right: 0;
    background: ${theme.colors.myrtleGreen};
    color: #fff;
    padding: 0.25em 1em;
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
    letter-spacing: -0.2px;
    font-weight: 400;
    background: ${theme.colors.warmBlack};
    color: ${theme.colors.lightGrey};
    text-transform: capitalize;

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
        <div
          className='photo'
          style={{ backgroundImage: `url(${images[0] || defaultImg})` }}
        />
        <Link linkClass='vehicleLink box-shadow' url={`/catalog/${slug}`}>
          Learn more
        </Link>
        <span className='price-tag box-shadow'>$ {formatMoney(price)}</span>
        <span className='name'>{name}</span>
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
