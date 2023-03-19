import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import NavbarComponent from "./common/NavbarContainer";

import Menu from "./components/MenuPage/Menu";

import RestaurantApp from "./components/RestaurantApp/RestaurantApp";
import Cart from "./components/cart/Cart";
import Form from "./components/Form";

export const RestaurantContext = createContext();
export const CartContext = createContext();
export const CartCountContext = createContext();

function App() {
  // const restaurantsData = require("./api/Restaurants.json");
  // const restaurantsData = require("http://localhost:5000/api/restaurants");

  // const [restaurants, setRestaurants] = useState(
  //   "http://localhost:5000/api/restaurants"
  // );
  const URL = "http://localhost:5000";
  const [restaurants, setRestaurants] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchRestaurants = async () => {
    const data = await axios
      .get(`${URL}/api/restaurants`)
      .then((response) => response.data);
    setRestaurants(data);
  };

  const handleCart = (value) => {
    setCart(value);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("food_cart"));
    if (result !== null) setCart(result);
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={[cart, handleCart]}>
        <NavbarComponent />
        <RestaurantContext.Provider value={restaurants}>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Form />} />
            <Route path="/restaurant/:r_id" element={<Menu />} />
            <Route path="/*" element={<RestaurantApp />} />
          </Routes>
        </RestaurantContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
