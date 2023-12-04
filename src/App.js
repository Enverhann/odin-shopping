import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Shop from "./components/Shop"
import ShoppingCart from "./components/ShoppingCart";
import { useCart } from "./CartContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/shop" element={<Shop onAddToCart={handleAddToCart} cartItems={cartItems}/>} />
        
        <Route exact path="/cart" element={<ShoppingCart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}
 
export default App;