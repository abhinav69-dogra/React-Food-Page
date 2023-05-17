import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState();

  const params = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.902752&lng=77.52174&restaurantId=" +
        params.id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

    // console.log(json.data.cards[0].card.card.info);

    setMenu(
      Object.values(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )
    );
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} ⭐</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        {console.log("MENU", menu)}
        <ul>
          {menu.map((item) => {
            // console.log(item);
            console.log(item.card.card.title);
            return <li key={item.card.card.title}>{item.card.card.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
