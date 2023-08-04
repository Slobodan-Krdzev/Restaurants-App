import { useContext, useEffect, useState } from "react"
import { RestaurantContext } from "../context/RestaurantsContext"
import { RestaurantType } from "../interfaces/Interfaces"
import { useParams } from "react-router-dom"
import RestaurantCard from "../components/RestaurantCard"

export default function CusineDetails() {
  const {restaurants} = useContext(RestaurantContext)
  const {cusine} = useParams()
  const [cusinesToDisplay, setCusinesToDisplay] = useState<RestaurantType[]>([])

  useEffect(() => { 
    setCusinesToDisplay(restaurants && JSON.parse( localStorage.getItem("RESTAURANTS") ?? '').filter((rest: RestaurantType) => rest.restauranttype === cusine))
  }, [])
  

  return (
    <section className="default-padding">
      <h1>{cusine}</h1>
      <div className="flex">
      {cusinesToDisplay.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} detailPage={false} />)}

      </div>
      
    </section>
  )
}