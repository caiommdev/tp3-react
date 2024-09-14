import React from "react";
import "./Product.css"

function Product(props){
    return(
        <div className="product">
            <h3 className="product-name">{props.name}</h3>
            <p className="product-description">
                {props.description}
            </p>
            <h4 className="product-price">R${props.price}</h4>
        </div>
    );
}

export default Product;