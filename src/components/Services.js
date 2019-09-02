import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Wrapper from '../components/Wrapper';

const StyledSection = styled.section`
  background: #000;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 80%,
      rgba(35, 35, 35, 0.9) 100%
    )
    center/cover no-repeat;
  height: 800px;
`;

const FlexContainer = styled.div`
  margin-top: 6em;
`;

const Title = styled.h2`
  font-size: 4em;
  line-height: 2;
  color: #000;
  padding: 0.1em 0.5em;
  background: #fff;
  display: inline;
  text-align: left;

  & + .line-center {
    width: 5rem;
    height: 5px;
    /* margin: 1em auto; */
    background: ${theme.colors.brightRed};
    display: block;
    margin-top: 1.5em;
    margin-bottom: 3em;
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
  margin-top: 5em;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5em 1.7em;
`;

const Item = styled.div`
  /* background: red; */
  display: none;
  margin: 0;
  color: #fff;
  text-align: center;

  & img {
  }

  & .title,
  .subtitle {
    color: #fff;
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
            <img src='' alt='service 1' />
            <h3 className='title'>Service 1</h3>
            <p className='subtitle'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              consectetur quia quisquam repudiandae.
            </p>
          </Item>
          <Item>
            <img src='' alt='service 2' />
            <h3 className='title'>Service 2</h3>
            <p className='subtitle'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              consectetur quia quisquam repudiandae.
            </p>
          </Item>
          <Item>
            <img src='' alt='service 3' />
            <h3 className='title'>Service 3</h3>
            <p className='subtitle'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              consectetur quia quisquam repudiandae.
            </p>
          </Item>
        </GridContainer>
      </Wrapper>
    </StyledSection>
  );
}
