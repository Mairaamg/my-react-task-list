import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="section-title">About Us</h2>
      <p className="app-description">
        Welcome <strong>LISTYLE</strong>, to our task management application. This simple yet powerful app helps you stay organized
        and keep track of your daily tasks.
      </p>
      <div className="app-functionalities">   
        <div className="functionality-item">
          <FaCheck />  Add new tasks
        </div>
        <div className="functionality-item">
          <FaCheck />  Delete tasks
        </div>
        <div className="functionality-item">
          <FaCheck />  Edit existing tasks
        </div>
        <div className="functionality-item">
          <FaCheck />  Clear visualization of completed tasks
        </div>
      </div>
      <p className="app-technologies">
        Developed using technologies like React, JavaScript, and CSS to provide an efficient and enjoyable
        user experience.
      </p>
    </div>
  );
};

export default AboutUs;
