import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './Components/TasksList';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import './styles/global.css';

function App() {
  return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks-list" element={<TaskList />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
