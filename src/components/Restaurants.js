import { useEffect, useState } from "react";
import { useAllRestaurants } from "../hooks/useAllRestaurant";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../util/helper";

const Restaurants = () => {
  let restaurants = useAllRestaurants();
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    setFilterRestaurants(restaurants);
  }, [restaurants]);

  if (!restaurants) return <h1>Loading...</h1>;
  return (
    <div className="mt-10">
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Restarant Name"
          value={searchText}
          className="border border-red-500 p-2 max-w-5xl focus:none"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2  text-white  bg-red-500"
          onClick={() => {
            setFilterRestaurants(filterData(searchText, restaurants));
          }}
        >
          Search
        </button>
      </div>
      {searchText ? (
        <p className="m-2 ml-5 text-gray-400">
          SEARCH VALUE OF{" "}
          <span className="text-black text-xl font-semibold">{searchText}</span>
        </p>
      ) : null}
      <div className="flex flex-wrap gap-5 justify-evenly">
        {filterRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant?.data?.data?.id}
              {...restaurant?.data?.data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Restaurants;
