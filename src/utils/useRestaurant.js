import { useState, useEffect } from "react";
import { MENU_LIST_URL } from "../contants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_LIST_URL + id);
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

  return { restaurant, menu };
};

export default useRestaurant;
