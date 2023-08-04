import { RestaurantType } from "../interfaces/Interfaces"
import SingleReview from "./SingleReview"

type ReviewsProps = {
  restaurant: RestaurantType
}

export default function Reviews({restaurant}: ReviewsProps) {

  return <section className="review-section">
    <h2>Reviews</h2>
    {restaurant.reviewsList.length > 0 ? 
    restaurant.reviewsList.map(review => <SingleReview key={review.id} review={review} />) : 
    <p className="medium-p">"Be The First To Write A Review!"</p>}
    
  </section>
}