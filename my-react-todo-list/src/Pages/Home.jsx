import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfo, FaListAlt, FaSun, FaMoon } from 'react-icons/fa';
import { useColorMode, Box, Button } from '@chakra-ui/react';
import './Home.css';

const Home = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <FaListAlt /> LISTYLE
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Box p={4}>
                  <Button onClick={toggleColorMode} variant="ghost" leftIcon={colorMode === 'light' ? <FaMoon /> : <FaSun />} />
                </Box>
              </li>
              <li>
                <Link to="/about-us">
                  <FaInfo /> About Us
                </Link>
              </li>
              <li>
                <Link to="/tasks-list">
                  <FaListAlt /> ToDo List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="welcome-message">
        <h2>Welcome to </h2>
        <h1> LISTYLE</h1>
        <h5>The easiest way to keep your life in order.</h5>
      </div>
    </div>
  );
};

export default Home;
