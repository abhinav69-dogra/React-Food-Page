import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { restaurant, menu } = useRestaurant(params.id);

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
