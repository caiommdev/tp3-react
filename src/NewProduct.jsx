import React, { useState } from 'react';
import './NewProduct.css';

const NewProduct = ({ products }) => {

  const [filterAvailable, setFilterAvailable] = useState(false);

  const handleFilterChange = (event) => {
    setFilterAvailable(event.target.checked);
  };

  const filteredProducts = filterAvailable ? products.filter(product => product.availability) : products;

  return (
    <div className="product-list">

      <div className="filter-section">
        <label>
          <input 
            type="checkbox" 
            checked={filterAvailable} 
            onChange={handleFilterChange} 
          />
          Mostrar apenas produtos disponíveis
        </label>
      </div>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div 
            key={index} 
            className={`product-item ${product.availability ? 'available' : 'unavailable'}`}
          >
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">Preço: ${product.price.toFixed(2)}</p>
            <p className="product-availability">
              {product.availability ? 'Disponível' : 'Indisponível'}
            </p>
          </div>
        ))) : (<p>Nenhum produto encontrado</p>)}
    </div>
  );
};

export default NewProduct;
