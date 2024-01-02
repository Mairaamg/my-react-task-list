import React from 'react';
import Task from '../Task';
import Header from '../Header';
import './TasksList.css';
import useTaskManager from '../../Hooks/useTaskManager'

const TaskList = () => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  return (
    <div className="task-list">
      <Header onAddTask={createTask} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={deleteTask} onEditTask={updateTask} />
      ))}
    </div>
  );
};

export default TaskList;
