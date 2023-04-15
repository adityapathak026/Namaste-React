import { useEffect, useState } from "react";
import { FETCH_REST_DATA } from "./constatnts";

const useRestaurantData = () => {

    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [allRestaurantList, setAllRestaurantList] = useState([]);

    useEffect(() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {
        const data = await fetch(FETCH_REST_DATA);
        const json = await data.json();
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurantList(json?.data.cards[2]?.data?.data?.cards);
    };

    return { allRestaurantList, filteredRestaurant };
};

export default useRestaurantData;