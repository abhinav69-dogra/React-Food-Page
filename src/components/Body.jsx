import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};

export default Body; 

