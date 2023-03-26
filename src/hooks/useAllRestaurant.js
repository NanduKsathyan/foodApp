import { useEffect, useState } from "react";
import { ALL_RESTAURANTS } from "../util/constants";

export const useAllRestaurants = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    const res = await fetch(ALL_RESTAURANTS);
    const restaurantJson = await res.json();
    setRestaurants(restaurantJson?.data?.cards);
  }
  return restaurants;
};
