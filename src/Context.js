import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {

    // state={
    //     greeting:"hello",
    //     name:"john"
    // }; 

    // room state
    state = {
        room:[],
        sortedRooms:[],
        featureRooms:[],
        loading:true
    };

    /**
     * getData method
     */
    componentDidMount(){
        let rooms = this.formatData(items);
        let featureRooms = rooms.filter(room => room.featured === true); 
        this.setState({
            rooms,
            featureRooms,
            sortedRooms: rooms,
            loading: false
        });
        // console.log(rooms);
    };

    formatData(items){
        let tempItems = items.map (item=>{
            
            let id = item.sys.id;
            let images = item.fields.images.map(images=>images.fields.file.url)
            // let images = items.fields.images.map(image=> image.fields.file.url );

            let room = {...item.fields,images, id};
            return room;
        });
        return tempItems;
    };


    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };


    render() {
        return (
            <RoomContext.Provider 
            value={{
                    ...this.state,
                    getRoom: this.getRoom
                    }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};
