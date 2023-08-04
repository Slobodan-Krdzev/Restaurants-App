import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantsContext";
import RestaurantCard from "./RestaurantCard";

export default function AllRestaurants() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <>
      <h2 className="title">All Restaurants</h2>
      <div className="cards-wrapper flex">
        {(restaurants ?? []).map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} detailPage={false}/>
        ))}
      </div>
    </>
  );
}
