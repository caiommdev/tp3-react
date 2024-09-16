// src/exercises/Exercise15.js
import React from "react";
import TableProduct from "../TableProduct";

const Exercise15 = () => {

  const products = [
    { name: 'Produto A', price: 29.99, availability: true },
    { name: 'Produto B', price: 19.99, availability: false },
    { name: 'Produto C', price: 49.99, availability: true },
    { name: 'Produto D', price: 9.99, availability: true },
  ];

  return (
    <div>
      <h1>Exercise 15</h1>
      <TableProduct products={products}/>
    </div>
  );
};

export default Exercise15;
