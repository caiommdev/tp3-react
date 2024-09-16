import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label className="form-label">Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div>
        <label className="form-label">Idade:</label>
        <input
          type="number"
          name="idade"
          value={formData.idade}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div>
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">Enviar</button>
    </form>
  );
};

export default Form;
