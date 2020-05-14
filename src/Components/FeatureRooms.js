import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'


export default class FeatureRooms extends Component {

    static contextType = RoomContext;
    render() {
        // const {name, greeting} = this.context;
        // const value = this.context;
        // console.log(value);

        let { loading, featureRooms: rooms } =
            this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        console.log(rooms)



        // console.log(rooms)
        // rooms = rooms
        // rooms = rooms.map (room => {
        //     return <Room key={room.id} room={room}/>
        // });

        return (
            <section className='featured-rooms'>
                <Title title='featured rooms'></Title>
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : rooms}
                </div>
                {/* <Room/> */}
                {/* <Loading/> */}
            </section>
        )
    }
}

