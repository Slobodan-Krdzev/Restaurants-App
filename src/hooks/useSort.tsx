import { RestaurantType } from "../interfaces/Interfaces";

export const useSort = (restaurtants: RestaurantType[]) => {
    const clonedRest = [...restaurtants]
    return clonedRest.sort((a, b) => b.reviews - a.reviews).slice(0, 10);
}