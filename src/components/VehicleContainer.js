import React from 'react';
import VehicleFilter from './VehicleFilter';
import VehicleList from './VehicleList';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import { withVehicleConsumer } from '../context';
import Loading from './Loading';
import Heading from './Heading';
import Section from './Section';

const StyledSection = styled(Section)`
  & .vehicle-container__wrapper {
    position: relative;

    & .vehicle-container__wrapper__main-heading {
      margin-bottom: 2.25em;
      text-align: center;
      letter-spacing: 0.4px;
      font-weight: 900;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        height: 3px;
        width: 80px;
        top: 55px;
        left: calc(50% - 40px);
        background: #da353b;
      }
    }

    & .vehicle-container__wrapper__grid {
      display: grid;
      grid-template-columns: 1fr;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  }
`;

function VehicleContainer({ context }) {
  const { loading, sortedVehicles, vehicles } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledSection>
      <Wrapper className='vehicle-container__wrapper'>
        <Heading rank={2} className='vehicle-container__wrapper__main-heading'>
          Catalog
        </Heading>
        <VehicleFilter vehicles={vehicles}></VehicleFilter>
        <div className='vehicle-container__wrapper__grid'>
          <VehicleList vehicles={sortedVehicles}></VehicleList>
        </div>
      </Wrapper>
    </StyledSection>
  );
}

export default withVehicleConsumer(VehicleContainer);
