// src/exercises/Exercise05.js
import React from "react";
import Product from "../Product";

const Exercise05 = () => {
  return (
    <div>
      <h1>Exercise 05</h1>
      <Product
        name='Produto1'
        description='Um produto legal'
        price='10'
      />
      <Product
        name='Produto2'
        description='Um produto mais legal'
        price='20.00'
      />
    </div>
  );
};

export default Exercise05;
