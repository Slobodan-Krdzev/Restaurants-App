import { createContext } from "react";
import { RestaurantType, ReviewType } from "../interfaces/Interfaces";

type RestaurantContextType = {
  restaurants: RestaurantType[];
  addReview: (restaurant: RestaurantType, review: ReviewType) => void;
  handleFavoriteToggle: (restaurant: RestaurantType) => void;
  favouriteRestaurants: RestaurantType[];
};

export const RestaurantContext = createContext({} as RestaurantContextType);
