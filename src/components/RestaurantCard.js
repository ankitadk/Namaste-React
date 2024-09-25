import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  //   console.log(useContext(UserContext));

  //   console.log(props);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props.resData.info;
  //   console.log(resData);
  return (
    <div className="m-4 p-4 w-[175px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h5 className="font-bold py-4 text-lg">{name}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating} stars</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} minutes</h6>
      <h6>User: {loggedInUser}</h6>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black absolute rounded-lg m-2 px-2 py-1 text-white">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
