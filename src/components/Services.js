import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Wrapper from './Wrapper';
import Section from './Section';
import viewport from '../styles/media';
import { car, bicycle, ribbon, help, speedometer, options } from './svg';
import Icon from './Icon';
import Heading from './Heading';
import P from './Paragraph';

const StyledSection = styled(Section)`
  background: ${theme.colors.mainBlack};

  & .main-heading {
    margin-bottom: 0.25em;
    text-align: center;
    letter-spacing: 1.4px;
  }

  & .services-grid {
    margin: 0;
    display: grid;
    align-items: stretch;
    justify-content: center;
    grid-template-columns: 1fr;

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${viewport[12]} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    & .service {
      border: 1px solid #222;
      border-radius: 4px;
      margin: 0;
      /* color: #fff; */
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
      grid-column-gap: 0.75em;

      @media ${viewport[7]} {
        grid-template-columns: max-content 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'icon text';
        grid-column-gap: 1.5em;
        padding: 1.2em 1em;

        &:nth-child(even) {
          /* border-left: none; */
        }
      }

      & .service-icon-wrapper {
        grid-area: icon;
        align-self: center;
        justify-self: center;
        width: 38px;

        @media ${viewport[7]} {
          align-self: center;
          justify-self: center;
        }

        @media ${viewport[9]} {
          width: 42px;
        }
      }

      & .service-text-wrapper {
        grid-area: text;
        align-self: center;
        text-align: left;
        letter-spacing: -0.1px;

        & p {
          margin: 0;
        }
      }
    }
  }
`;

const IconFilled = styled(Icon)`
  fill: ${theme.colors.lightGrey};
`;

export default function services() {
  return (
    <StyledSection>
      <Wrapper>
        <Heading rank={2} className='main-heading'>
          Services
        </Heading>
        <P style={{ marginBottom: '2.5em', textAlign: 'center' }}>
          Our main goal is to give you the most satisfactory experience possible
        </P>
        <div className='services-grid'>
          <article className='service'>
            <div className='service-icon-wrapper'>
              <IconFilled>{car}</IconFilled>
            </div>
            <div className='service-text-wrapper'>
              <Heading rank={3}>Traditional options</Heading>
              <P>Vehicles based on petroleum derived fuels</P>
            </div>
          </article>
          <article className='service'>
            <div className='service-icon-wrapper'>
              <IconFilled>{bicycle}</IconFilled>
            </div>
            <div className='service-text-wrapper'>
              <Heading rank={3}>Eco friendly alternatives</Heading>
              <P>All-electric and fuel cell vehicles</P>
            </div>
          </article>
          <article className='service'>
            <div className='service-icon-wrapper'>
              <IconFilled>{ribbon}</IconFilled>
            </div>
            <div className='service-text-wrapper'>
              <Heading rank={3}>Happiness Guaranteed</Heading>
              <P>
                Our #1 priority is your happiness. If you have a problem, we
                will solve it.
              </P>
            </div>
          </article>
          <article className='service'>
            <div className='service-icon-wrapper service-icon-wrapper'>
              <IconFilled>{speedometer}</IconFilled>
            </div>
            <div className='service-text-wrapper'>
              <Heading rank={3}>Sport alternatives</Heading>
              <P>For those interested in power and speed</P>
            </div>
          </article>
          <article className='service'>
            <div className='service-icon-wrapper'>
              <IconFilled>{options}</IconFilled>
            </div>
            <div className='service-text-wrapper'>
              <Heading rank={3}>Multiple choices</Heading>
              <P>Sedans, vans, bikes, trucks, boats and more...</P>
            </div>
          </article>
          <article className='service'>
            <div className='service-icon-wrapper'>
              <IconFilled>{help}</IconFilled>
            </div>
            <div className='service-text-wrapper'>
              <Heading rank={3}>24/7 Customer Support</Heading>
              <P>Do you have questions? contact us anytime!</P>
            </div>
          </article>
        </div>
      </Wrapper>
    </StyledSection>
  );
}
