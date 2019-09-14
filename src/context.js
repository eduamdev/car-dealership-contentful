import React, { Component } from 'react';
import items from './content/data';

const VehicleContext = React.createContext();

class VehicleProvider extends Component {
  state = {
    vehicles: [],
    sortedVehicles: [],
    featuredVehicles: [],
    loading: true,
    modalIsOpen: false,
    type: 'all',
    model: 'all',
    color: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    engine: false
  };

  componentWillMount() {
    let vehicles = this.formatData(items);
    let featuredVehicles = vehicles.filter(
      vehicle => vehicle.featured === true
    );
    let maxPrice = Math.max(...vehicles.map(item => item.price));

    this.setState({
      vehicles,
      featuredVehicles,
      sortedVehicles: vehicles,
      loading: false,
      price: maxPrice,
      maxPrice
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let vehicle = { ...item.fields, images, id };

      return vehicle;
    });

    return tempItems;
  }

  getVehicle = slug => {
    let tempVehicles = [...this.state.vehicles];

    const vehicle = tempVehicles.find(vehicle => vehicle.slug === slug);

    return vehicle;
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
