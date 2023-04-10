import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import ShimmerEffect from './ShimmerEffect';
import { Link } from 'react-router-dom';

const Body = () => {

    const [allRestaurantList, setAllRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurantList(json?.data.cards[2]?.data?.data?.cards);
    };

    const filterData = (searchTerm, allRestaurantList) => {
        const restData = allRestaurantList.filter((rest) => rest.data.name.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log(restData)
        return restData;
    }

    if (!allRestaurantList) return null;

    return (
        <>
            <div>
                <input type="text" value={searchTerm} placeholder="Search" className='input_field'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button onClick={() => {
                    const data = filterData(searchTerm, allRestaurantList);
                    setFilteredRestaurant(data)
                }
                }
                    className='filter_btn'>
                    Search
                </button>

                {/* <button onClick={() => {
                    let filteredList = allRestaurantList.filter((rest) => rest.data.avgRating > 4)
                    setAllRestaurantList(filteredList);
                }}
                    className='filter_btn'>Filter By Rating</button> */}


            </div>
            {(allRestaurantList.length === 0) ? <ShimmerEffect /> :
                (filteredRestaurant.length === 0) ? <h1>No matching item found</h1> :
                    <div className='body_container'>
                        {filteredRestaurant.map((restaurant) => (
                            <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
                                <RestaurantCard restData={restaurant} />
                            </Link>
                        ))}
                    </div>}
        </>
    )
}

export default Body;