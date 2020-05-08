import React, { Component } from 'react'
import {RoomContext} from '../Context'


export default class FeatureRooms extends Component {

    static contextType = RoomContext;
    render() {
        const {name, greeting} = this.context;
        // const value = this.context;
        // console.log(value);

        const {featureRooms : rooms} = this.context;
        console.log(rooms)

        return ( 
            <div>
                Hello FeatureRooms!{greeting} {name} 
            </div>
        )
    }
}

