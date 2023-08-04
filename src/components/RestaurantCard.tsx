import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantsContext";
import { useCalcAverage } from "../hooks/useCalcAverage";
import { RestaurantType } from "../interfaces/Interfaces";

interface RestaurantCardProps {
  restaurant: RestaurantType;
  detailPage: boolean;
}

export default function RestaurantCard({
  restaurant: {
    id,
    image,
    businessname,
    restauranttype,
    reviewsList,
    reviews,
    phone,
    address,
    parkinglot,
    isFavorite,
  },
  detailPage,
  restaurant,
}: RestaurantCardProps) {
  const { handleFavoriteToggle } = useContext(RestaurantContext);
  const location = useLocation()

  return (
    <Link to={`/restaurantDetails/${id}`} className={location.pathname.includes('restaurantDetails') ? 'details-res' : "res"}>
      <div className="img-wrapper">
        <i
          className={`${
            isFavorite ? "fa-solid fa-heart fa-xl" : "fa-regular fa-heart fa-xl"
          } fave-icon`}
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();

            handleFavoriteToggle(restaurant);
          }}
        ></i>
        <img className={location.pathname.includes('restaurantDetails') ? 'details-img' : "card-img"} src={image} alt={businessname} />
      </div>

      <div className="card-desc">
        <h3 className="card-business-name">{businessname}</h3>
        <h4 className="card-restaurant-type">{restauranttype}</h4>
        <div className="rating">
          Rating: {useCalcAverage(reviewsList, reviews)}
        </div>
        <p className="card-reviews-number">
          {reviews > 0
            ? `Based on ${reviews} ${reviews >= 1 ? "Reviews" : "Review"}`
            : "Be The First To Review"}
        </p>
        {detailPage && (
          <>
            <p className="medium-p">Phone Number: {phone}</p>
            <p className="medium-p">Adress: {address}</p>
            <p className="medium-p">
              {parkinglot ? "Parking Lot Available" : "No Parking"}
            </p>
          </>
        )}
      </div>
    </Link>
  );
}
