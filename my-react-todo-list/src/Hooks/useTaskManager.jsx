import { useState, useEffect } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks
      ? JSON.parse(storedTasks)
      : [
        { id: 1, title: 'Estudiar', description: 'Debo estudiar React en Platzi', completed: false },
        { id: 2, title: 'Repasar', description: 'Estudiar en Mimo HTML y CSS', completed: false },
        ];
  });

  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const createTask = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      );
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return { tasks, createTask, deleteTask, updateTask };
};

export default useTaskManager;
