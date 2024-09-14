// src/exercises/Exercise01.js
import React from "react";
import Card from "../Card";

const Exercise01 = () => {
  return (
    <div>
      <h1>Exercise 01</h1>
      <Card
        name="Nome do card 1"
        description="Descricao do primeiro card"
      />

      <Card
        name="Nome do card 2"
        description="Descricao do segundo card"
      />
    </div>
  );
};

export default Exercise01;