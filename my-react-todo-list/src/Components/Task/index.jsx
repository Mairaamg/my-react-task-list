import React, { useState } from 'react';
import { FaCheck, FaTimesCircle, FaEdit, FaSave } from 'react-icons/fa';
import './Task.css';

const Task = ({ task, onDeleteTask, onEditTask }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleComplete = () => {
    onEditTask(task.id, { completed: !task.completed });
    console.log('Task completed:', task.title);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
    console.log('Task deleted:', task.title);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEditTask(task.id, { title: editedTitle, description: editedDescription });
    setEditing(false);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {editing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveClick}>
            <FaSave />
          </button>
        </>
      ) : (
        <>
          <div className="task-info">
            <span>{task.title}</span>
            <p>{task.description}</p>
          </div>
          <div className="task-icons">
            <FaTimesCircle className="delete-icon" onClick={handleDeleteTask} />
            <FaCheck className="check-icon" onClick={handleToggleComplete} />
            <FaEdit className="edit-icon" onClick={handleEditClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
