import React from 'react';
import { CDN_URL } from '../utils/constatnts';

const RestaurantCard = (props) => {
    const { restData } = props;
    const { name, cloudinaryImageId, avgRating, costForTwo, deliveryTime, cuisines } = restData?.data;

    return (
        <div className='restaurant_card'>
            <img src={CDN_URL + cloudinaryImageId} alt={cuisines} />
            <h3>Name : {name}</h3>
            <h4>Cuisines : {cuisines.join(", ")}</h4>
            <h4>Rating : {avgRating}</h4>
            <h4>Cost For Two : {costForTwo / 1090}</h4>
            <h4>Delivery Time : {deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;