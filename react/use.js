import React from "react";
import ShoppingCart from "./components/ShoppingCart";

const products = [
  { name: "Camiseta", price: 20 },
  { name: "Pantalón", price: 35 },
  { name: "Zapatos", price: 50 },
];

function App() {
  return <ShoppingCart products={products} />;
}

export default App;