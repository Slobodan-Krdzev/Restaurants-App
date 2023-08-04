import { ReviewType } from "../interfaces/Interfaces";

type SingleReviewProps = {
  review: ReviewType;
};

export default function SingleReview({ review }: SingleReviewProps) {
  const count = review.stars;
  let starsArray = [];

  for (let i = 0; i < count; i++) {
    starsArray.push(null);
  }

  return (
    <div className="review">
      <p>Author: {review.author}</p>
      <p>Comment: {review.comment}</p>
      <p>
        Stars:{" "}
        {starsArray.map((star, idx) => (
          <i
            key={`${idx} Star`}
            className="fa-solid fa-star"
            style={{ color: "#FFD89C" }}
          ></i>
        ))}
      </p>
    </div>
  );
}
