import React from "react";
import { useCart } from "../CartContext";

const ShoppingCart = ( ) => {
    const {cartItems}=useCart()
    return (
        <div className="shopping-cart">
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems ? (
            cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - Quantity: {item.quantity} - Price:${item.price}
              </li>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </ul>
      </div>
    );
  };
  
 
export default ShoppingCart;