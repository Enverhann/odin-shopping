import React from "react";
import { useState } from "react";

const ProductCard = ({product, onAddToCart}) => {
    const[quantity, setQuantity]=useState(1)
    const handleAddToCart = ()=>{
        onAddToCart(product)
    }

    const handleIncrement = () =>{
        setQuantity(quantity+1)
    }

    const handleDecrement = () =>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    return ( 
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
     );
}
 
export default ProductCard;