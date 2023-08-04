import { useContext } from "react"
import RestaurantCard from "../components/RestaurantCard"
import { RestaurantContext } from "../context/RestaurantsContext"

export default function Favorites() {
  const {favouriteRestaurants} = useContext(RestaurantContext)

  console.log(favouriteRestaurants);
  
  if(favouriteRestaurants.length > 0) {
    return (
      <section className="default-padding">
        <h1>Favorites</h1>
        <div className="flex">
          {favouriteRestaurants.map(rest => <RestaurantCard key={rest.id} restaurant={rest} detailPage={false} />)}
        </div>
      </section>
    )
  }

  return (
    <section className="default-padding fave-section">
        <h1>Favorites</h1>
        <h2>Still No Favorites</h2>
      </section>
  )
  
}