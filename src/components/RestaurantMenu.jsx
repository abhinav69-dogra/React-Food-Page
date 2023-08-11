// import React from "react";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {

//   const [resinfo,setResinfo] = useState(null);
//   useEffect(() => {
//     fetchMenu();
//   }, []);
 
//   const fetchMenu=async() => {
//     const data=await fetch(
//       "",
//     )
//     const json = await data.json();
//     setResinfo(json.data);
//   }

// //  const {name,cuisines,costForTwoMessage}=resinfo?.cards[0]?.card?.card?.info;
  
//   return resinfo===null ? (<Shimmer /> ) : (
//     <div className="menu">
//       <h1>{resinfo?.cards[0]?.card?.card?.info?.name}</h1>
//       <h2>Menu</h2>
//       <ul>
//         <li>Biryani</li>
//         <li> diet coke</li>
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
