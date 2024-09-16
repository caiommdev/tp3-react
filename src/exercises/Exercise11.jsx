// src/exercises/Exercise11.js
import React, { useState } from "react";
import Form from "../Form";
import Resume from "../Resume";
import '../Form.css';

const Exercise11 = () => {
  const [dados, setDados] = useState(null);

  const handleFormSubmit = (formData) => {
    setDados(formData);
  };

  return (
    <div>
      <h1>Exercise 11</h1>
      <h2>Formulário e Resumo</h2>
      <Form onSubmit={handleFormSubmit} />
      {dados && <Resume dados={dados} />}
    </div>
  );
};

export default Exercise11;
