import react from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { useRestraurant } from "../utils/useRestraurant";
import ItemList from "./Itemlist";
import Button from "@mui/material/Button";
// import { RES_MENU_URL } from "../utils/constants";

const RestaurantMenu = (props) => {
  const { id } = useParams();
  const [resData, setresData] = react.useState([]);
  const [menuData, setmenuData] = react.useState([]);
  const resInfo = useRestraurant(id);

  useEffect(() => {
    if (!resInfo) return;
    setresData(resInfo.cards[2].card.card.info);
    setmenuData(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }, [resInfo]);

  if (resData?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="menu-container">
      <div className="menu-header">{resData?.name}</div>
      <div className="menu-sub">
        <div className="menu-sub-container">
          <div className="menu-item-rating">
            {resData?.avgRating}({resData?.totalRatingsString}) •{" "}
            {resData?.costForTwoMessage}
          </div>
          <div className="menu-locality">{resData?.cuisines?.join(",")}</div>
          <div className="menu-sub2-container">
            <div className="menu-icon">
              <div className="circle1"></div>
              <div className="line"></div>
              <div className="circle2"></div>
            </div>
            <div className="menu-info">
              <div className="row1">
                <div className="outlet">Outlet</div>
                <div className="location">Mahadevpura</div>
              </div>
              <div className="row2">{resData?.sla?.slaString}</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {menuData?.map((item) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                {item?.card?.card?.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {item?.card?.card?.itemCards?.map((menu) => {
                return (
                  <ItemList menu={menu} key={menu?.card?.info?.id} />
                  // <div className="rec-container">
                  //   <div className="rec-item1">
                  //     <div className="r1">{menu?.card?.info?.name}</div>
                  //     <div className="r2">
                  //       {menu?.card?.info?.defaultPrice / 100}
                  //     </div>
                  //     <div className="r3">
                  //       {menu?.card?.info?.ratings.aggregatedRating.rating}
                  //     </div>
                  //     <div className="r4">{menu?.card?.info?.description}</div>
                  //   </div>
                  //   <div className="rec-item2">
                  //     <div className="img">
                  //       <img
                  //         className="img-info"
                  //         src={
                  //           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  //           menu?.card?.info?.imageId
                  //         }
                  //         alt="Resrant Image"
                  //       ></img>
                  //     </div>
                  //     <div className="btn">
                  //       <Button variant="contained">ADD</Button>
                  //     </div>
                  //   </div>
                  // </div>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
