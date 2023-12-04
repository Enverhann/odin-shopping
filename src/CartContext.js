import React, { createContext, useContext, useState } from 'react';

const CartContext=createContext({
    cartitems:[],
    addToCart:()=>{},
})
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product) => {
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
      <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  // Custom hook to access the cart context
  export const useCart = () => {
    return useContext(CartContext);
  };