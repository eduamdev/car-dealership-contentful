import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Wrapper from './Wrapper';
import viewport from '../styles/media';
import Title from './Title';
import { car, bicycle, ribbon, help, speedometer, colorPalette } from './svg';
import Icon from './Icon';

const StyledSection = styled.section`
  background: ${theme.colors.mainBlack};
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: ${theme.colors.lightGrey};
  text-align: left;

  @media ${viewport[7]} {
    font-size: 1.6em;
    line-height: 1.3;
  }
`;

const GridContainer = styled.div`
  margin: 4em 0;
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
  text-align: center;
  padding: 2em 3em;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-template-areas:
    'icon'
    'text';

  @media ${viewport[7]} {
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'icon text';
    grid-column-gap: 3.5em;

    &:nth-child(even) {
      border-left: none;
    }
  }

  & .image-container {
    grid-area: icon;
    align-self: center;
    justify-self: center;
    width: 70px;

    @media ${viewport[7]} {
      align-self: start;
      justify-self: start;
    }
  }

  & .text-container {
    grid-area: text;
    text-align: left;
    letter-spacing: -0.1px;

    & .title {
      font-size: 1.5em;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 0.5em;
      text-align: center;

      @media ${viewport[7]} {
        font-size: 2em;
        text-align: left;
      }
    }

    & .subtitle {
      color: ${theme.colors.lightGrey};
      font-size: 1.1em;
      line-height: 1.2;
      font-weight: 200;
      text-align: center;

      @media ${viewport[7]} {
        font-size: 1.2em;
        line-height: 1.2;
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          porro quod? Eaque!
        </Subtitle>
        <GridContainer>
          <Item>
            <div className='image-container'>
              <ItemIcon>{car}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Service 1</h3>
              <p className='subtitle'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia consectetur quia quisquam repudiandae.
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{bicycle}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Service 2</h3>
              <p className='subtitle'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia consectetur quia quisquam repudiandae.
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{ribbon}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Service 3</h3>
              <p className='subtitle'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia consectetur quia quisquam repudiandae.
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{speedometer}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Service 4</h3>
              <p className='subtitle'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia consectetur quia quisquam repudiandae.
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{colorPalette}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Service 5</h3>
              <p className='subtitle'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia consectetur quia quisquam repudiandae.
              </p>
            </div>
          </Item>
          <Item>
            <div className='image-container'>
              <ItemIcon>{help}</ItemIcon>
            </div>
            <div className='text-container'>
              <h3 className='title'>Service 6</h3>
              <p className='subtitle'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia consectetur quia quisquam repudiandae.
              </p>
            </div>
          </Item>
        </GridContainer>
      </Wrapper>
    </StyledSection>
  );
}
