import { useParams } from "react-router-dom";
import ShimmerEffect from "./ShimmerEffect";
import { CDN_URL } from "../utils/constatnts";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {

    const { id } = useParams();

    const restaurant = useRestaurant(id);

    return (!restaurant) ? <ShimmerEffect /> : (
        <div className="restaurant_menu_card">
            <img src={CDN_URL + restaurant?.cloudinaryImageId} alt="" />
            <h3>Name : {restaurant?.name}</h3>
            <h4>Area : {restaurant?.areaName}</h4>
            <h4>Cost for Two : {restaurant?.costForTwoMessage}</h4>
            <h4>Cuisines : {restaurant?.cuisines?.join(", ")}</h4>
            <h4>Avg. rating : {restaurant?.avgRatingString}</h4>
            <h4>Total Rating : {restaurant?.totalRatingsString}</h4>
        </div>
    )
};

export default RestaurantMenu;