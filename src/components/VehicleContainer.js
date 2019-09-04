import React from 'react';
import VehicleFilter from './VehicleFilter';
import VehicleList from './VehicleList';

export default function VehicleContainer() {
  return (
    <>
      <VehicleFilter></VehicleFilter>
      <VehicleList></VehicleList>
    </>
  );
}
