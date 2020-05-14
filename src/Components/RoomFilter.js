import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
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
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        )
    })


    return (
        <section className='filter-container'>
            <Title title='search rooms'></Title>
            <form className='filter-form'>

                {/*Type Filter */}
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
                {/*End Type Filter */}

                {/*Guest Filter */}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guest</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/*End Guest Filter */}

                {/*Room Price  Filter */}
                <div className='form-group'>
                    <label htmlFor='price'>
                        room price ${price}
                    </label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                {/*End Room Price Filter */}
                {/* Room Size Filter */}
                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                    {/* <div className="size-input"> */}
                    <input type="number" name="minSize" id="size"
                        value={minSize} onChange={handleChange}
                        className="size-input">
                    </input>
                    <input type="number" name="maxSize" id="size"
                        value={maxSize} onChange={handleChange}
                        className="size-input">
                    </input>
                    {/* </div> */}
                </div>
                {/* End Room Size Filter */}
                {/* Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"
                            checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">
                            breakfast
                        </label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"
                            checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">
                            pets
                        </label>
                    </div>

                </div>
                {/* End Extras */}

            </form>
        </section>
    )
}
