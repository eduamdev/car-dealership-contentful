import React from 'react';
import VehicleFilter from './VehicleFilter';
import VehicleList from './VehicleList';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import viewport from '../styles/media';
import { withVehicleConsumer } from '../context';
import Loading from './Loading';
import Heading from './Heading';
import Section from './Section';

const StyledSection = styled(Section)`
  & .catalog-flex {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    & .catalog-flex__main-heading {
      margin-bottom: 2.25em;
      text-align: left;
      letter-spacing: 0.4px;
      font-weight: 400;
      position: relative;
      display: inline-block;

      &:after {
        content: '';
        position: absolute;
        height: 3px;
        width: 80px;
        top: 45px;
        left: 0;
        background: #da353b;
      }

      @media ${viewport[7]} {
        text-align: center;

        &:after {
          left: calc(50% - 40px);
          top: 55px;
        }
      }
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    'filter'
    'list';
  grid-template-columns: 1fr;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  grid-gap: 2em 0;

  @media ${viewport[9]} {
    grid-template-areas: 'filter list';
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 2em;
  }

  @media ${viewport[12]} {
    grid-template-columns: 1fr 3fr;
  }
`;

const StyledFilter = styled(VehicleFilter)`
  grid-area: filter;

  @media ${viewport[9]} {
    align-self: start;
  }
`;
const StyledList = styled(VehicleList)`
  grid-area: list;
  padding: 1em;
`;

function VehicleContainer({ context }) {
  const { loading, handleBodyClass, sortedVehicles, vehicles } = context;

  handleBodyClass('modal-open');

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledSection>
      <Wrapper>
        <div className='catalog-flex'>
          <Heading rank={2} className='catalog-flex__main-heading'>
            Catalog
          </Heading>
        </div>
        <GridContainer>
          <StyledFilter vehicles={vehicles}></StyledFilter>
          <StyledList vehicles={sortedVehicles}></StyledList>
        </GridContainer>
      </Wrapper>
    </StyledSection>
  );
}

export default withVehicleConsumer(VehicleContainer);
