import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../utils/cartslice";

const ItemList = ({ menu }) => {
  console.log(menu);
  const dispatch = useDispatch();
  const handleItem = (menu) => {
    dispatch(addItemToCart(menu));
  };
  return (
    <div className="rec-container">
      <div className="rec-item1">
        <div className="r1">{menu?.card?.info?.name}</div>
        <div className="r2">{menu?.card?.info?.defaultPrice / 100}</div>
        <div className="r3">
          {menu?.card?.info?.ratings.aggregatedRating.rating}
        </div>
        <div className="r4">{menu?.card?.info?.description}</div>
      </div>
      <div className="rec-item2">
        <div className="img">
          <img
            className="img-info"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              menu?.card?.info?.imageId
            }
            alt="Resrant Image"
          ></img>
        </div>
        <div className="btn">
          <Button variant="contained" onClick={() => handleItem(menu)}>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ItemList;
