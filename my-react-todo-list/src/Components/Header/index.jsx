import React, { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import './Header.css';

const Header = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskInput.length < 3) {
      setFormError('Task name must be at least 3 characters.');
      return;
    }

    setFormError('');

    const newTask = {
      id: Date.now(),
      title: taskInput,
      description: taskDescription,
      completed: false,
    };

    onAddTask(newTask);

    setTaskInput('');
    setTaskDescription('');
  };

  return (
    <div className="header">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="task-input">
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskInput}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Task description..."
            value={taskDescription}
            onChange={handleDescriptionChange}
          />
          <button type="submit">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
      {formError && <p className="error-message">{formError}</p>}
    </div>
  );
};

export default Header;
