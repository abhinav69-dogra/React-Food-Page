import { useState, useEffect } from "react";
import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allRes, setAllRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.902402&lng=77.517359&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setAllRes(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  // Conditional Rendering
  // if 'restaurants' is empty '[]' ==> Shimmer UI
  // if 'restaurants' has data      ==> actual Data UI

  return allRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRes);
            // update the state - restaurants
            setFilteredRes(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRes.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
