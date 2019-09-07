import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import viewport from '../styles/media';

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

  & .link {
    visibility: hidden;
    color: ${theme.colors.richBlack};
    background: ${theme.colors.lightGrey};
    border: 1px solid;
    border-color: transparent;
    padding: 0.8em 1.6em;
    font-size: 1em;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60%;
    /* transform: scale(0); */

    &:hover,
    &:focus {
      color: ${theme.colors.lightGrey};
      border-color: ${theme.colors.lightGrey};
      background: ${theme.colors.coralRed};
    }

    @media ${viewport[7]} {
      padding: 1em 2em;
      font-size: 1.1em;
    }
  }

  &:focus .link,
  &:hover .link {
    visibility: visible;
    transition: all 0.3s;
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
          <a className='link box-shadow' href='/'>
            Learn more
          </a>
          <span className='price-tag'>$55, 000</span>
          <span className='name'>Lobo Lariat</span>
        </Item>
        <Item>
          <div className='photo'></div>
          <a className='link box-shadow' href='/'>
            Learn more
          </a>
          <span className='price-tag'>$55, 000</span>
          <span className='name'>Focus Fiesta</span>
        </Item>
        <Item>
          <div className='photo'></div>
          <a className='link box-shadow' href='/'>
            Learn more
          </a>
          <span className='price-tag'>$55, 000</span>
          <span className='name'>LB-3456</span>
        </Item>
      </GridContainer>
    </>
  );
}
