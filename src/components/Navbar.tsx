import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <header>
      <Link to={'/'} className="link">
        Restaurants
      </Link>
      <Link to={'/favorites'}>
      <i className="fa-solid fa-heart fa-lg" style={{color: "#d76570"}}></i>
      </Link>
    </header>
  )
}