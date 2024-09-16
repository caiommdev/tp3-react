import React from 'react';
import Task from './Task';

const TaskList = () => {
  const tasks = [
    { name: 'Task1', status: 'Completed' },
    { name: 'Task2', status: 'In Progress' },
    { name: 'Task3', status: 'Pending' }
  ];

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} status={task.status} />
      ))}
    </div>
  );
};

export default TaskList;