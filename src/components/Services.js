import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Wrapper from './Wrapper';
import viewport from '../styles/media';
import Title from './Title';
import { car, bicycle, ribbon, help, speedometer, options } from './svg';
import Icon from './Icon';

const StyledSection = styled.section`
  background: ${theme.colors.mainBlack};
`;

const Subtitle = styled.p`
  font-size: 0.95em;
  line-height: 1.3;
  color: ${theme.colors.lightGrey};
  text-align: left;

  @media ${viewport[7]} {
    font-size: 1.1em;
    line-height: 1.4;
  }
`;

const GridContainer = styled.div`
  margin: 2em 0;
  display: grid;
  align-items: stretch;
  justify-content: center;
  grid-template-columns: 1fr;

  @media ${viewport[7]} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Item = styled.div`
  border: 1px solid ${theme.colors.darkGrey};
  margin: 0;
  color: #fff;
  text-align: left;
  padding: 0.75em 1em;
  display: grid;
  align-items: baseline;
  justify-content: center;
  /* grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr; */
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'icon text';
  grid-column-gap: 1em;

  @media ${viewport[7]} {
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'icon text';
    grid-column-gap: 1.5em;
    padding: 1.2em 1em;

    &:nth-child(even) {
      border-left: none;
    }
  }

  & .image-container {
    grid-area: icon;
    align-self: center;
    justify-self: center;
    width: 45px;

    @media ${viewport[7]} {
      align-self: start;
      justify-self: start;
    }

    @media ${viewport[9]} {
      width: 60px;
    }
  }

  & .text-container {
    grid-area: text;
    text-align: left;
    letter-spacing: -0.1px;

    & .title {
      font-size: 1.2em;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 0.5em;
      text-align: left;

      @media ${viewport[7]} {
        font-size: 1.4em;
        text-align: left;
      }
    }

    & .subtitle {
      color: ${theme.colors.lightGrey};
      font-size: 0.9em;
      line-height: 1.3;
      font-weight: 200;
      text-align: left;

      @media ${viewport[7]} {
        font-size: 1em;
        line-height: 1.35;
        text-align: left;
      }
    }
  }
`;

const ItemIcon = styled(Icon)`
  fill: ${theme.colors.lightGrey};
`;

export default function services() {
  return (
    <StyledSection>
      <Wrapper>
        <Title title='Services' placement='left' />
        <Subtitle>
          Our main goal is to give you the most satisfactory experience possible
        </Subtitle>
        <GridContainer>
          <Item>
            <div className='image-container'>
              <ItemIcon>{car}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Traditional options</h3>
              <p className='subtitle'>
                Vehicles based on petroleum derived fuels
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{bicycle}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Eco friendly alternatives</h3>
              <p className='subtitle'>All-electric and fuel cell vehicles</p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{ribbon}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Happiness Guaranteed</h3>
              <p className='subtitle'>
                Our #1 priority is your happiness. Which means we stand by our
                vehicles 100%, no matter what, no questions asked, no holds
                barred, no ifs, no buts. If you have a problem, we will solve
                it.
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{speedometer}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Sport alternatives</h3>
              <p className='subtitle'>
                For those interested in power and speed
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{options}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Multiple choices</h3>
              <p className='subtitle'>
                Sedans, vans, bikes, trucks, boats and more...
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{help}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>24/7 Customer Support</h3>
              <p className='subtitle'>
                Do you have questions? contact us anytime!
              </p>
            </div>
          </Item>
        </GridContainer>
      </Wrapper>
    </StyledSection>
  );
}
