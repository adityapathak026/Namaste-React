import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard';
import ShimmerEffect from './ShimmerEffect';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import useRestaurantData from "../utils/useRestaurantData"

const Body = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const isOnline = useOnline();

    const { allRestaurantList, filteredRestaurant } = useRestaurantData()

    if (!isOnline) { return <h1>You're offline, please check your internet connection!!</h1> }

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