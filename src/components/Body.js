import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../contants";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { user, setUser } = useContext(UserContext);
  const [allRes, setAllRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_LIST_URL);

    const json = await data.json();
    // console.log(json);
    setAllRes(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 offline, Please check your Internet Connection</h1>;
  }

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
            const data = filterData(searchText, allRes);
            setFilteredRes(data);
          }}
        >
          Search
        </button>
        <span style={{ padding: "1%" }}></span>
        <input
          value={user.name}
          onChange={(e) => {
            setUser({ name: e.target.value, email: "new@gmail.com" });
          }}
        />
      </div>
      <div className="restaurant-list">
        {filteredRes.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
