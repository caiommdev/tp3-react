// src/exercises/Exercise02.js
import React, { useState } from "react";

const Exercise02 = () => {
  const colors = ['#997C55', '#62596E', '#596E5E', '#EDA64A', '#8E4AED', '#4AED71'];
  
  const [color, setColor] = useState(colors[0]);

  const handleClick = () => {
      const newColor = colors[Math.floor(Math.random() * colors.length)]
      setColor(newColor)
  };

  const buttonStyle = {
    backgroundColor: color,
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px'
  };

  return (
    <div>
      <h1>Exercise 02</h1>
      <button style={buttonStyle} onClick={handleClick}>
        NAO APERTE
      </button>
    </div>
  );
};

export default Exercise02;
