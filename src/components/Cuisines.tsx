import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantsContext";
import { Link } from "react-router-dom";
import { RestaurantType } from "../interfaces/Interfaces";

export default function Cuisines() {
  const { restaurants } = useContext(RestaurantContext);
  const cusines: string[] = [];

  
  restaurants.forEach((rest: RestaurantType) => {
    cusines.push(rest.restauranttype);
  });

  function removeDuplicateCusine(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          j--;
        }
      }
    }
    return arr;
  }
  
  const cusinesToDisplay = removeDuplicateCusine(cusines);

  return (
    <section className="container">
      <h2 className="title">Cusines</h2>
      <div className="cusines-btn-wrapper">
        {(cusinesToDisplay ?? []).map((cusine) => (
          <Link key={cusine} to={`/cusineDetails/${cusine}`}>
            <button className="small-btn">{cusine}</button>
          </Link>
        ))}
      </div>
    </section>
  );
}
