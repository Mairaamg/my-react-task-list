import React from 'react';
import Header from './Components/Header/';
import TaskList from './Components/TasksList';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;