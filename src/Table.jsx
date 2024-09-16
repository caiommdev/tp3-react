import React from 'react';
import './Table.css';

const Table = ({ products }) => {
  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Disponibilidade</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index} className={product.availability ? 'available' : 'unavailable'}>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.availability ? 'Disponível' : 'Indisponível'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Nenhum produto encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
