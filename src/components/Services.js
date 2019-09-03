import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Wrapper from '../components/Wrapper';
import viewport from '../styles/media';

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
  font-size: 4em;
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
    display: block;
    margin: 3em 0;
  }
`;

const Subtitle = styled.p`
  margin-top: 1em;
  font-size: 1.6em;
  line-height: 1.3;
  color: ${theme.colors.lightGrey};
  text-align: left;
`;

const GridContainer = styled.div`
  margin: 7em 0;
  display: grid;
  align-items: center;
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
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'icon'
    'text';

  @media ${viewport[7]} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'icon text';

    &:nth-child(even) {
      border-left: none;
    }
  }

  & .image-container {
    grid-area: icon;
  }

  & .text-container {
    grid-area: text;
    text-align: left;
    letter-spacing: -0.2px;

    & .title {
      font-size: 2em;
      font-weight: 900;
      text-transform: uppercase;
      line-height: 2.2;
      color: #fff;
    }

    & .subtitle {
      color: ${theme.colors.lightGrey};
      font-size: 1.2em;
      line-height: 1.2;
    }
  }
`;

export default function services() {
  return (
    <StyledSection>
      <Wrapper>
        <FlexContainer>
          <Title>Services</Title>
          <span className='line-center'></span>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            porro quod? Eaque!
          </Subtitle>
        </FlexContainer>
        <GridContainer>
          <Item>
            <div className='image-container'>
              <img src='' alt='service 1' />
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
              <img src='' alt='service 2' />
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
              <img src='' alt='service 3' />
            </div>
            <div className='text-container'>
              <h3 className='title'>Service 3</h3>
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
