import { ResImageURL } from "../utils/constants";
import starCircle from "../icons/Star.svg";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div className="res-image">
        <img
          className="img-info"
          src={ResImageURL + resData.info.cloudinaryImageId}
          alt="Resrant Image"
        />
      </div>
      <div className="res-info">
        <div className="res-name">{resData.info.name}</div>
        <div className="rate-time">
          <img className="star-icon" src={starCircle} alt="star" />
          <div className="res-rate">{resData.info.avgRating} </div>
          <span className="dot">.</span>
          <div className="res-sla">{resData.info.sla.slaString}</div>
        </div>
        <div className="res-cuisine">{resData.info.cuisines.join(",")}</div>
        <div className="res-area">{resData.info.areaName}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;

const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted-label">
        <div className="promoted-label-text">Promoted</div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export { withPromotedLabel };
