import React from 'react';
import './Form.css';

const Resume = ({ dados }) => {
  return (
    <div className="resume-container">
      <h2 className="resume-title">Resumo dos Dados</h2>
      <p className="resume-paragraph"><strong>Nome:</strong> {dados.nome}</p>
      <p className="resume-paragraph"><strong>Idade:</strong> {dados.idade}</p>
      <p className="resume-paragraph"><strong>Email:</strong> {dados.email}</p>
    </div>
  );
};

export default Resume;