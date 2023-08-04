import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import RestaurantDetails from "./pages/RestaurantDetails";
import CusineDetails from "./pages/CusineDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/restaurantDetails/:id"
            element={<RestaurantDetails />}
          />
          <Route path="/cusineDetails/:cusine" element={<CusineDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
