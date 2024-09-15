import React from 'react';
import Task from './Task';

const TaskList = () => {
  const tasks = [
    { name: 'Task 1', status: 'Completed' },
    { name: 'Task 2', status: 'In Progress' },
    { name: 'Task 3', status: 'Pending' }
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