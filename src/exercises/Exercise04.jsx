// src/exercises/Exercise04.js
import React, { useState } from "react";
import ItemList from "../ItemList";

const Exercise04 = () => {
  const defaultItems = ['Item1', 'Item2', 'Item3']

  const [items, setItems] = useState(defaultItems);
  const handleClick = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px'
  };


  return (
    <div>
      <h1>Exercise 04</h1>
      <button style={buttonStyle} onClick={handleClick}>
        Adicionar Item
      </button>
      <ItemList items={items}/>
    </div>
  );
};

export default Exercise04;
