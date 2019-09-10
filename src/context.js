import React, { Component } from 'react';
// import items from './data';

const VehicleContext = React.createContext();

class VehicleProvider extends Component {
  state = {
    vehicles: [],
    sortedVehicles: [],
    featuredVehicles: [],
    loading: true,
    modalIsOpen: false
  };

  handleModal = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  };

  handleBodyClass = className => {
    if (this.state.modalIsOpen) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  };

  render() {
    return (
      <VehicleContext.Provider
        value={{
          ...this.state,
          handleBodyClass: this.handleBodyClass,
          handleModal: this.handleModal
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
