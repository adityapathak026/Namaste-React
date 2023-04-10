import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {

    const { id } = useParams();

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurant()
    }, []);

    async function getRestaurant() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}`);
        const json = await data.json();
        console.log(json?.data);
        setRestaurant(json?.data);
    };

    return (
        <>
            <h1>Rest Menu Page</h1>
        </>
    )
};

export default RestaurantMenu;