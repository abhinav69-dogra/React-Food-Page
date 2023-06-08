import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="card1">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{lastMileTravelString} </h5>
      <h5>
        {user.name}-{user.email}
      </h5>
    </div>
  );
};

export default RestrauntCard;
