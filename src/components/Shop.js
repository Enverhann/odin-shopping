import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShoppingCart from "./ShoppingCart";
import { useCart } from "../CartContext";

const Shop = () => {
    const {addToCart}=useCart();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      setCartItems((prevItems) =>
        prevItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div>
      <div className="shop-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)}  />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default Shop;
