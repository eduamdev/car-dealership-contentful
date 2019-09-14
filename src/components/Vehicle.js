import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import viewport from '../styles/media';
import Link from '../components/Link';
import defaultImg from '../assets/images/vehicle-2.jpg';
import PropTypes from 'prop-types';

function formatMoney(amount, decimalCount = 2, decimal = '.', thousands = ',') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    // console.log(e);
  }
}

const Item = styled.article`
  background: ${theme.colors.darkGreyAlt};
  margin: 0;
  text-align: center;
  border-radius: 2px;
  position: relative;
  height: 270px;
  overflow: hidden;
  border: 1px solid ${theme.colors.mediumGrey};

  @media ${viewport[7]} {
    height: 330px;
  }

  &:hover .photo,
  &:focus .photo {
    transform: scale(1.2);
    transition: all 0.75s;
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
    padding: 0.5em 1.5em;
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
    font-size: 1.1em;
    display: block;
    letter-spacing: -0.2px;
    font-weight: 200;
    background: ${theme.colors.warmBlack};
    color: ${theme.colors.lightGrey};
    text-transform: capitalize;

    @media ${viewport[7]} {
      font-size: 1.3em;
    }
  }
`;

export default function Vehicle({ vehicle }) {
  const { name, slug, images, price } = vehicle;

  return (
    <>
      <Item>
        <img className='photo' src={images[0] || defaultImg} />
        <Link linkClass='vehicleLink box-shadow' url={`/catalog/${slug}`}>
          Learn more
        </Link>
        <span className='price-tag'>$ {formatMoney(price)}</span>
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
