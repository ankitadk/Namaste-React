import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //   console.log(props);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props.resData.info;
  //   console.log(resData);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h5>{name}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating} stars</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} minutes</h6>
    </div>
  );
};

export default RestaurantCard;
