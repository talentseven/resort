import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <>
            Hello from Rooms Container
            <RoomsFilter rooms={rooms}></RoomsFilter>
            <RoomsList rooms={rooms}></RoomsList>
        </>
    )
}

export default withRoomConsumer(RoomContainer);





// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomsList from './RoomList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const { loading, sortedRooms, rooms } = value
//                 if (loading) {
//                     return <Loading />
//                 }

//                 console.log(value)
//                 return (
//                     <div>
//                         Hello from RoomsContainer
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
//     )
// }
