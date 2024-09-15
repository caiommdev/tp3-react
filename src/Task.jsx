import React from 'react';

const Task = ({ name, status }) => {
  return (
    <div className="task">
      <h3>{name}</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default Task;