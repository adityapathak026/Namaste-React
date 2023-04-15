export const filterData = (searchTerm, allRestaurantList) => {
    const restData = allRestaurantList.filter((rest) => rest.data.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return restData;
}