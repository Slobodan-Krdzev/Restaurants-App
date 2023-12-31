export interface RestaurantType {
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: Array<{
    id: number;
    author: string;
    comment: string;
    stars: number;
  }>;
  isFavorite?: boolean 
}

export interface ReviewType {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
