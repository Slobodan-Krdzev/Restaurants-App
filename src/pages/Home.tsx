import { useContext } from "react";
import AllRestaurants from "../components/AllRestaurants";
import Cuisines from "../components/Cuisines";
import PopularRestaurants from "../components/PopularRestaurants";
import SupriseRestaurant from "../components/SupriseRestaurant";
import { RestaurantContext } from "../context/RestaurantsContext";

export default function Home() {

  const {restaurants} = useContext(RestaurantContext)

  if(restaurants.length > 0) {
    return (
      <>
        <SupriseRestaurant />
        <PopularRestaurants />
        <Cuisines />
        <AllRestaurants />
      </>
    )
  }

  return <>Loading...</>

 
}