import { RES_MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";

export const useRestraurant = (id) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const response = await fetch(RES_MENU_URL + id);
    const data = await response.json();
    const result = data?.data;
    setresInfo(result);
  };
  return resInfo;
};

export default useRestraurant;
