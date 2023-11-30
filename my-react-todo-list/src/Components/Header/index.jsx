import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import './Header.css';

const Header = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() === '') {
      // Evitar agregar tareas vacías
      return;
    }

    // Crear una nueva tarea con un ID único (puedes usar un paquete como uuid para generar IDs)
    const newTask = {
      id: Date.now(), // Usamos la marca de tiempo como ID en este ejemplo
      name: taskInput,
      completed: false,
    };

    // Llamar a la función proporcionada desde el componente principal para agregar la tarea
    onAddTask(newTask);

    // Limpia el input después de agregar la tarea
    setTaskInput('');

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
        <button onClick={handleAddTask}>
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
};

export default Header;
