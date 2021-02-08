import "./App.css";
import React from "react";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto pt-10 flex justify-between">
        <ProductsList />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
