import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../Components/Title'


// get all unique values 

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {

    const context = useContext(RoomContext);
    // console.log(context)
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;

    let types = getUnique(rooms, 'type');
    // console.log(types)
    types = ["all", ...types]
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className='filter-container'>
            <Title title='search rooms'></Title>
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
            </form>
        </section>
    )
}
