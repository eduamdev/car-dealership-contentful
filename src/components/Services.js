import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Wrapper from '../components/Wrapper';
import viewport from '../styles/media';
import {
  car,
  bicycle,
  ribbon,
  help,
  speedometer,
  colorPalette
} from '../components/svg';
import Icon from '../components/Icon';

const StyledSection = styled.section`
  background: #000;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 80%,
    rgba(35, 35, 35, 0.9) 100%
  );
`;

const FlexContainer = styled.div`
  margin-top: 8em;
`;

const Title = styled.h2`
  font-size: 3em;
  /* line-height: 2; */
  color: #000;
  padding: 0.1em 0.5em;
  background: #fff;
  display: inline;
  text-align: left;
  border-bottom: 15px solid ${theme.colors.brightRed};

  @media ${viewport[7]} {
    font-size: 4em;
  }
`;

const Subtitle = styled.p`
  margin-top: 4em;
  font-size: 1.2em;
  color: ${theme.colors.lightGrey};
  text-align: left;

  @media ${viewport[7]} {
    font-size: 1.6em;
    line-height: 1.3;
  }
`;

const GridContainer = styled.div`
  margin: 7em 0;
  display: grid;
  align-items: stretch;
  justify-content: center;
  grid-template-columns: 1fr;

  @media ${viewport[7]} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Item = styled.div`
  border: 1px solid ${theme.colors.lightGrey};
  margin: 0;
  color: #fff;
  text-align: center;
  padding: 2em;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
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
        <FlexContainer>
          <Title>Services</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            porro quod? Eaque!
          </Subtitle>
        </FlexContainer>
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
