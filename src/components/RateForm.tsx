import { useContext, useState } from "react";
import { RestaurantType, ReviewType } from "../interfaces/Interfaces";
import { RestaurantContext } from "../context/RestaurantsContext";

type RateFormProps = {
  restaurant: RestaurantType;
};

export default function RateForm({ restaurant }: RateFormProps) {
  const [formData, setFormData] = useState<{
    author: string;
    comment: string;
    stars: number;
  }>({
    author: "",
    comment: "",
    stars: 1,
  });

  const { addReview } = useContext(RestaurantContext);

  const resetForm = () => {

    setFormData({
      author: "",
      comment: "",
      stars: 1,
    });
  };

  return (
    <section>
      <h2>Review Form</h2>
      <form
        className="review-form"
        onSubmit={(e) => {
          e.preventDefault();

          const reviewObj: ReviewType = {
            id: new Date().valueOf(),
            author: formData.author,
            comment: formData.comment,
            stars: formData.stars,
          };

          addReview(restaurant, reviewObj);
          alert("Review Submited Succesfully!");
          resetForm()
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          value={formData.author}
          onChange={(e) => {
            setFormData({ ...formData, author: e.target.value });
          }}
        />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          required
          value={formData.comment}
          onChange={(e) => {
            setFormData({ ...formData, comment: e.target.value });
          }}
        />
        <label htmlFor="stars">Stars</label>
        <input
          type="range"
          min={1}
          max={5}
          id="stars"
          required
          value={formData.stars}
          onChange={(e) => {
            setFormData({ ...formData, stars: e.target.valueAsNumber });
          }}
        />
        <button type="submit" className="big-btn">
          Leave A Review
        </button>
      </form>
    </section>
  );
}
