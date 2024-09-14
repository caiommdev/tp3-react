import React from 'react';
import './ItemList.css';

function ItemList({ items }) {
  return (
    <div className="item-list">
      <h2>Lista de Itens</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
