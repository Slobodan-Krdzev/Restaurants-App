import React, { useEffect, useState } from "react";
import { RestaurantContext } from "./RestaurantsContext";
import { ENDPOINT } from "../constants/constants";
import { RestaurantType, ReviewType } from "../interfaces/Interfaces";
import axios from "axios";

interface ProdividerOutputDesc {
  restaurants: RestaurantType[];
  addReview: (restaurant: RestaurantType, review: ReviewType) => void;
  handleFavoriteToggle: (restaurant: RestaurantType) => void;
  favouriteRestaurants: RestaurantType[];
}

type RestaurantContextProviderProps = {
  children: React.ReactNode;
};

export default function RestaurantContextProvider({ children }: RestaurantContextProviderProps) {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [restaurantToPut, setRestaurantToPut] = useState<RestaurantType | undefined>();
  const [favouriteRestaurants, setFavouriteRestaurants] = useState<RestaurantType[]>([])

  useEffect(() => {
    axios.get(ENDPOINT)
      .then((dataFromAPI) => {
        setRestaurants(dataFromAPI.data);
        localStorage.setItem("RESTAURANTS", JSON.stringify(dataFromAPI.data));
        setFavouriteRestaurants(restaurants && JSON.parse(localStorage.getItem('RESTAURANTS')!).filter((rest: RestaurantType) => rest.isFavorite === true))
      })
      .catch((err) => console.log(err));
  }, [restaurantToPut]);

  const addReview = (restaurant: RestaurantType, review: ReviewType) => {
    const updatedRestaurant: RestaurantType = {
      ...restaurant,
      reviews: restaurant.reviews + 1,
      reviewsList: [...restaurant.reviewsList, review],
    };

    axios
      .put(`${ENDPOINT}/${restaurant.id}`, updatedRestaurant)
      .then((response) => {
        console.log("Success", response.data);
      })
      .catch((error) => {
        console.error("Oops. Something Happened", error);
      });

    setRestaurantToPut(restaurant);
  };

  const handleFavoriteToggle = (restaurant: RestaurantType) => {

      const updatedRestaurant: RestaurantType = {
        ...restaurant,
        isFavorite: (restaurant.isFavorite ? false : true),
      };

      axios
        .put(`${ENDPOINT}/${restaurant.id}`, updatedRestaurant)
        .then((response) => {
          alert((restaurant.isFavorite ? 'Restaurant Removed From Favorites' : "Restaurant Succesfully Added to Favorites") );
        })
        .catch((e) => {
          alert("Ops, Something Went Wrong");
        });

      setRestaurantToPut(restaurant);
    
  };

  const ProviderOutput: ProdividerOutputDesc = {
    restaurants,
    addReview,
    handleFavoriteToggle,
    favouriteRestaurants
  };

  return (
    <RestaurantContext.Provider value={ProviderOutput}>
      {children}
    </RestaurantContext.Provider>
  );
}
