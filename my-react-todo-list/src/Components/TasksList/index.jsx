import React, { useState } from 'react';
import Task from '../Task/index';
import './TasksList.css';


const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Realizar informes de tercer trimestre para 4A y 4B', completed: false },
        { id: 2, name: 'Estudiar React en Platzi', completed: false },
        { id: 3, name: 'Repasar HTML y CSS con Mimo', completed: false },
        { id: 4, name: 'Empezar el curso práctico de JavaScript en Platzi', completed: false },
        { id: 5, name: 'Avanzar en la plataforma de ADA', completed: false },
        { id: 6, name: 'Realizar laboratorios grupales', completed: false },
        { id: 7, name: 'Hacer primer entregable de React', completed: false },
    ]);
  
    const handleAddTask = (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    };
  
    const handleDeleteTask = (taskId) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };
  
    return (
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDeleteTask={handleDeleteTask} />
        ))}
      </div>
    );
  };
  
  export default TaskList;