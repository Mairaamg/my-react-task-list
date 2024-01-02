import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import './Header.css';

const Header = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() === '' || taskDescription.trim() === '') {
      // Evitar agregar tareas con campos vacíos
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskInput,
      description: taskDescription,
      completed: false,
    };

    onAddTask(newTask);

    setTaskInput('');
    setTaskDescription('');
    console.log('Task added:', newTask);
  };

  return (
    <div className="header">
      <h1>ToDo List</h1>
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
        <button onClick={handleAddTask}>
          <IoMdAddCircleOutline/>
        </button>
      </div>
    </div>
  );
};

export default Header;
