import React, { Component } from 'react';
// import items from './data';

const VehicleContext = React.createContext();

class VehicleProvider extends Component {
  state = {
    vehicles: []
  };

  render() {
    return (
      <VehicleContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </VehicleContext.Provider>
    );
  }
}

const VehicleConsumer = VehicleContext.Consumer;

export function withVehicleConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <VehicleConsumer>
        {value => <Component {...props} context={value} />}
      </VehicleConsumer>
    );
  };
}

export { VehicleProvider, VehicleConsumer, VehicleContext };
