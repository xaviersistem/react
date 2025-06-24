import React, { useState } from "react";

function ShoppingCart({ products }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Agregar</button>
          </li>
        ))}
      </ul>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(idx)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;