import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constatnts";

const useRestaurant = (restId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurant()
    }, []);

    async function getRestaurant() {
        const data = await fetch(FETCH_MENU_URL + restId);
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    };
    return restaurant;
};

export default useRestaurant;