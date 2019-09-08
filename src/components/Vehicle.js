import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import viewport from '../styles/media';
import Link from '../components/Link';

const GridContainer = styled.div`
  margin: 5em auto;
  display: grid;
  width: 80vw;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1rem;

  @media ${viewport[7]} {
    width: 85vw;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }

  @media ${viewport[9]} {
    width: 90vw;
    max-width: 1170px;
  }
`;

const Item = styled.div`
  background: ${theme.colors.darkGreyAlt};
  margin: 0;
  text-align: center;
  border-radius: 2px;
  position: relative;
  height: 270px;
  overflow: hidden;

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
    border-radius: 4px;
    background-color: black; /* fallback color */
    background-image: url('https://images.unsplash.com/photo-1520608760-eff2c44afa2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
    font-size: 1.3em;
    display: block;
    letter-spacing: -0.2px;
    font-weight: 200;
    background: ${theme.colors.warmBlack};
    color: ${theme.colors.lightGrey};
  }
`;

export default function Vehicle() {
  return (
    <>
      <GridContainer>
        <Item>
          <div className='photo'></div>
          <Link linkClass='vehicleLink box-shadow' url='/'>
            Learn more
          </Link>
          <span className='price-tag'>$55, 000</span>
          <span className='name'>Lobo Lariat</span>
        </Item>
        <Item>
          <div className='photo'></div>
          <Link linkClass='vehicleLink box-shadow' url='/'>
            Learn more
          </Link>
          <span className='price-tag'>$55, 000</span>
          <span className='name'>Focus Fiesta</span>
        </Item>
        <Item>
          <div className='photo'></div>
          <Link linkClass='vehicleLink box-shadow' url='/'>
            Learn more
          </Link>
          <span className='price-tag'>$55, 000</span>
          <span className='name'>LB-3456</span>
        </Item>
      </GridContainer>
    </>
  );
}
