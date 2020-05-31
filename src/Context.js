import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    room: [],
    sortedRooms: [],
    featureRooms: [],
    loading: true,
    type: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  /**
   * getData method
   */
  componentDidMount() {
    let rooms = this.formatData(items);
    let featureRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    this.setState({
      rooms,
      featureRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
    // console.log(rooms);
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((images) => images.fields.file.url);
      // let images = items.fields.images.map(image=> image.fields.file.url );

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type == "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    console.log(name, value);
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    console.log("hello from filterRoom method");

    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    // all the rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // Filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    console.log("hello");
    console.log(tempRooms);

    // Filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // Filter by Price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // Filter by Size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // Filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // Filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomConsumer, RoomContext };

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value}></Component>}
      </RoomConsumer>
    );
  };
}
