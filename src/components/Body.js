import React, { useState, useEffect } from 'react'
import RestaurantCrad from './RestaurantCrad';
import resList from '../utils/mockData';

const Body = () => {

    const [restaurantList, setrestaurantList] = useState(resList);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setrestaurantList(json?.data.cards[2]?.data?.data?.cards)
        console.log(json)
    }


    return (
        <>
            <div>
                <input type="text" value={searchTerm} placeholder="Search" className='input_field'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button onClick={() => {
                    const filteredList = restaurantList.filter((rest) => rest.data.name.includes(searchTerm))
                    setrestaurantList(filteredList)
                }}
                    className='filter_btn'>
                    Search
                </button>

                {/* <button onClick={() => {
                    let filteredList = restaurantList.filter((rest) => rest.data.avgRating > 4)
                    setrestaurantList(filteredList);
                }}
                    className='filter_btn'>Filter By Rating</button> */}
            </div>
            <div className='body_container'>
                {restaurantList.map((restaurant) => (
                    <RestaurantCrad key={restaurant.data.id} restData={restaurant} />
                ))}
            </div>
        </>
    )
}

export default Body;