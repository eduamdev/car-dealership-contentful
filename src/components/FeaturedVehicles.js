import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import viewport from '../styles/media';

const StyledSection = styled.section`
  background: ${theme.colors.blackMatte};
  background: linear-gradient(
    180deg,
    rgba(35, 35, 35, 0.9) 0%,
    rgba(255, 255, 255, 1) 80%
  );
  /* height: 800px; */
`;

const FlexContainer = styled.div`
  margin-top: 8em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 3em;
  /* line-height: 2; */
  color: #000;
  padding: 0.1em 0.5em;
  background: #fff;
  display: inline;
  text-align: left;

  & + .line-center {
    width: 5rem;
    height: 4px;
    /* margin: 1em auto; */
    background: ${theme.colors.brightRed};
    border: 1px solid ${theme.colors.smokyTopaz};
    display: block;
    margin: 3em 0;
  }

  @media ${viewport[7]} {
    font-size: 4em;
  }
`;

const GridContainer = styled.div`
  margin: 5em auto 10em auto;
  display: grid;
  width: 80vw;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;

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
  background: ${theme.colors.babyPowder};
  /* display: none; */
  margin: 0;
  color: #000;
  text-align: center;
  border-radius: 2px;
  position: relative;

  & img {
    height: 330px;
    width: 100%;
    display: block;
    cursor: pointer;
  }

  & .label {
    padding: 0.5em 1em;
    font-size: 1.3em;
    display: block;
    letter-spacing: -0.2px;
    font-weight: 200;
    background: ${theme.colors.blackAlt};
    color: ${theme.colors.lightGrey};
  }

  & .price-tag {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 37, 1, 0.7);
    color: #fff;
    padding: 0.5em 1.5em;
  }
`;

export default function FeaturedVehicles() {
  return (
    <StyledSection>
      <Wrapper>
        <FlexContainer>
          <Title>Featured Vehicles</Title>
          <span className='line-center'></span>
        </FlexContainer>
      </Wrapper>
      <GridContainer>
        <Item>
          <img
            src='https://images.unsplash.com/photo-1520608760-eff2c44afa2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            alt='service 1'
          />
          <span className='price-tag'>$55, 000</span>
          <p className='label'>Lobo Lariat</p>
        </Item>
        <Item>
          <img
            src='https://images.unsplash.com/photo-1520608760-eff2c44afa2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            alt='service 2'
          />
          <span className='price-tag'>$55, 000</span>
          <p className='label'>Focus Fiesta</p>
        </Item>
        <Item>
          <img
            src='https://images.unsplash.com/photo-1520608760-eff2c44afa2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            alt='service 3'
          />
          <span className='price-tag'>$55, 000</span>
          <p className='label'>LB-3456</p>
        </Item>
      </GridContainer>
    </StyledSection>
  );
}
