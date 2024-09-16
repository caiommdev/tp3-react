// src/exercises/Exercise12.js
import React from "react";
import NewProduct from "../NewProduct";
import '../NewProduct.css'

const Exercise12 = () => {
  const products = [
    { name: 'Produto A', price: 29.99, availability: true },
    { name: 'Produto B', price: 19.99, availability: false },
    { name: 'Produto C', price: 49.99, availability: true },
    { name: 'Produto D', price: 9.99, availability: true },
  ];

  return (
    <div>
      <h1>Exercise 12</h1>
      <div className="app-container">
        <NewProduct products={products}/>
      </div>
    </div>
  );
};

export default Exercise12;
