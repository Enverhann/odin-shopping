import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const Navbar = ({cartItems}) => {
    return ( 
        <div className="navbar">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/shop" className="nav-link">
                Shop
            </Link>
            <Link to="/cart" className="nav-link">
                Cart
            </Link>
        </div>
     );
}
 
export default Navbar;