import React, { Component } from 'react';
// import items from './content/data';
import Client from './content/Contentful';

const VehicleContext = React.createContext();

class VehicleProvider extends Component {
  state = {
    vehicles: [],
    sortedVehicles: [],
    featuredVehicles: [],
    loading: true,
    modalIsOpen: false,
    type: 'All',
    model: 'All',
    brand: 'All',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    rental: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'vehicleDealership',
        order: 'fields.price'
      });
      let vehicles = this.formatData(response.items);
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
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    // let vehicles = this.formatData(items);
    // let featuredVehicles = vehicles.filter(
    //   vehicle => vehicle.featured === true
    // );
    // let maxPrice = Math.max(...vehicles.map(item => item.price));

    // this.setState({
    //   vehicles,
    //   featuredVehicles,
    //   sortedVehicles: vehicles,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice
    // });
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

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterVehicles
    );
  };

  filterVehicles = () => {
    let { vehicles, type, brand, model, capacity, price, rental } = this.state;

    let tempVehicles = [...vehicles];
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== 'All') {
      tempVehicles = tempVehicles.filter(vehicle => vehicle.type === type);
    }

    // filter by brand
    if (brand !== 'All') {
      tempVehicles = tempVehicles.filter(vehicle => vehicle.brand === brand);
    }

    // filter by model
    if (model !== 'All') {
      tempVehicles = tempVehicles.filter(vehicle => vehicle.model === model);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempVehicles = tempVehicles.filter(
        vehicle => vehicle.capacity >= capacity
      );
    }

    // filter by price
    tempVehicles = tempVehicles.filter(vehicle => vehicle.price <= price);

    // filter by rental
    if (rental) {
      tempVehicles = tempVehicles.filter(vehicle => vehicle.rental === true);
    }

    // change state
    this.setState({
      sortedVehicles: tempVehicles
    });
  };

  handleModal = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  };

  render() {
    return (
      <VehicleContext.Provider
        value={{
          ...this.state,
          getVehicle: this.getVehicle,
          handleChange: this.handleChange,
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
