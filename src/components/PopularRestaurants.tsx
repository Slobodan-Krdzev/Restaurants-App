import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantsContext";
import RestaurantCard from "./RestaurantCard";
import { useSort } from "../hooks/useSort";

export default function PopularRestaurants() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <section className="container">
      <h2 className="title">Our Most Popular Restaurants</h2>
      <div className="popular-rest-wrapper flex">
        {(useSort(restaurants) ?? []).map((rest) => (
          <RestaurantCard key={rest.id} restaurant={rest} detailPage={false} />
        ))}
      </div>
    </section>
  );
}
