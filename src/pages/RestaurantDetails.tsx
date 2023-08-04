import { useContext } from "react";
import { useParams } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { RestaurantContext } from "../context/RestaurantsContext";
import { RestaurantType } from "../interfaces/Interfaces";
import RateForm from "../components/RateForm";
import Reviews from "../components/Reviews";

export default function RestaurantDetails() {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantContext);

  const restaurantToRender =
    restaurants &&
    (JSON.parse(localStorage.getItem("RESTAURANTS") ?? "").find(
      (res: RestaurantType) => res.id === id
    ) as RestaurantType);

  return (
    <section className="restaurant-details-page">
      <RestaurantCard restaurant={restaurantToRender} detailPage={true} />
      <Reviews restaurant={restaurantToRender} />

      <RateForm restaurant={restaurantToRender} />
    </section>
  );
}
