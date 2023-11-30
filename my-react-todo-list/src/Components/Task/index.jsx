import React, { useState } from 'react';
import { FaCheck, FaTimesCircle } from 'react-icons/fa';
import './Task.css';

const Task = ({ task, onDeleteTask }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleToggleComplete = () => {
    setCompleted(!completed);
    console.log('Task completed:', task.name);
  };

  const handleDeleteTask = () => {
    
    onDeleteTask(task.id);
    console.log('Task deleted:', task.name);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <div className="task-info">
        <span>{task.name}</span>
      </div>
      <div className="task-icons">
        <FaTimesCircle className="delete-icon" onClick={handleDeleteTask} />
        <FaCheck className="check-icon" onClick={handleToggleComplete} />
      </div>
    </div>
  );
};

export default Task;
