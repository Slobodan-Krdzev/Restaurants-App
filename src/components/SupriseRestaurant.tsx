import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantsContext";
import { Link } from "react-router-dom";

export default function SupriseRestaurant() {

  const {restaurants} = useContext(RestaurantContext)

  console.log(restaurants);
  
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <section className="container suprise-section">
        <h2 className="title">Don't Know What To Eat?</h2>
        <Link to={`/restaurantDetails/${restaurants[getRandomInt(0, restaurants.length)].id}`}>
            <button className="big-btn">Suprise Me!</button>
        </Link>
    </section>
  )
}