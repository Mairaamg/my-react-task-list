import React, { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Box, Input, Textarea, Button } from '@chakra-ui/react';
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
    <Box
      className="header"
      bgImage={`url('/todo-list.png') center/cover no-repeat fixed`}
      backgroundSize="cover"
      backgroundPosition="center"
      padding="20px"
      color="#fff"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
    >
      
      <form onSubmit={handleSubmit}>
        <Box className="task-input">
          <Input
            type="text"
            placeholder="Add a new task..."
            value={taskInput}
            onChange={handleInputChange}
            
          />
          <Textarea
            placeholder="Task description..."
            value={taskDescription}
            onChange={handleDescriptionChange}
          />
          <Button type="submit">
            <IoMdAddCircleOutline />
          </Button>
        </Box>
      </form>
      {formError && <p className="error-message">{formError}</p>}
    </Box>
  );
};

export default Header;
