import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found-page">
     <h2>Oops...Something Went Wrong!</h2>
      <Link to={'/'}>
        <button className="big-btn">Go Home?!</button>
      </Link>
    </section>
  )
}