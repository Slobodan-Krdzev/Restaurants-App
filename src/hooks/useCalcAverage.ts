import { ReviewType } from "../interfaces/Interfaces";

export const useCalcAverage = (reviewsList: ReviewType[], reviews: number) => {
    let finalSum = 0;
    let sum = 0;
  
    reviewsList.forEach((review) => (sum += review.stars));
  
    finalSum = sum / reviews;
  
    if (finalSum > 0) {
      return finalSum;
    } else {
      return "No Reviews";
    }
  };