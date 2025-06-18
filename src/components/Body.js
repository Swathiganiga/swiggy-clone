import React, { useEffect, useState } from "react";
import resObject from "../utils/mockdata";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resObject from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  const fetchRestaurantData = async () => {
    const data = await fetch(RES_LIST_URL);
    const resObject = await data?.json();
    setRestaurantList(
      resObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      resObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restaurantList?.length === 0) {
    return <Shimmer />;
  }

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resObject.filter(
              (resData) => resData.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = restaurantList.filter((item) => {
              return item?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((resData) => (
          <Link to={`/restaraunts/${resData.info.id}`}>
            {resData?.info?.avgRating > 4.2 ? (
              <RestaurantCardPromoted resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
