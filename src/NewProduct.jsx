import React from 'react';
import './App.css';

const NewProduct = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className={`product-item ${product.availability ? 'available' : 'unavailable'}`}>
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">Preço: ${product.price.toFixed(2)}</p>
          <p className="product-availability">
            {product.availability ? 'Disponível' : 'Indisponível'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewProduct;
