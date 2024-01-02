import React, { useState, useEffect } from 'react';
import Task from '../Task/index';
import Header from '../Header';
import './TasksList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [
        { id: 1, title: 'Estudiar', description: 'Debo estudiar React en Platzi', completed: false },
        { id: 2, title: 'Repasar', description: 'Estudiar en Mimo HTML y CSS', completed: false },
    ];
  });
  
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleEditTask = (taskId, updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="task-list">
    <Header onAddTask={handleAddTask} />
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
    ))}
  </div>
  );
};

export default TaskList;