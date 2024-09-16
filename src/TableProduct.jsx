import React, { useState } from 'react';
import Table from './Table';

const TableProduct = ({ products }) => {
  const [filterAvailable, setFilterAvailable] = useState(false);

  const handleFilterChange = (event) => {
    setFilterAvailable(event.target.checked);
  };

  const filteredProducts = filterAvailable 
    ? products.filter(product => product.availability)
    : products;

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

      <Table products={filteredProducts} />
    </div>
  );
};

export default TableProduct;
