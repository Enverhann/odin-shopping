import React from "react";
import ShoppingCart from "./ShoppingCart";

const Home = () => {
    return (  
        <div className="home-container">
            <h2>Welcome to Our Shop</h2>
            <p>Discover amazing products</p>
            <img src="https://placekitten.com/800/400"
            alt="Home Page"
            className="home-image" />
        </div>
    );
}
 
export default Home;