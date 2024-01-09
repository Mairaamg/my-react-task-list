import React from 'react';
import { FaCheck, FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
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
          <FaCheck /> Add new tasks
        </div>
        <div className="functionality-item">
          <FaCheck /> Delete tasks
        </div>
        <div className="functionality-item">
          <FaCheck /> Edit existing tasks
        </div>
        <div className="functionality-item">
          <FaCheck /> Clear visualization of completed tasks
        </div>
      </div>
      <p className="app-technologies">
        Developed using technologies like React, JavaScript, and CSS to provide an efficient and enjoyable user experience.
      </p>
      <div className="contact-info">
        <p>
          <FaEnvelope /> info@listyle.com
        </p>
        <p>
          <FaPhone /> +57 300 435 1018
        </p>
        <p>
          <FaMapMarker /> Tuluá, Valle del Cauca
        </p>
      </div>
      <footer className="footer">
        &copy; 2024 LISTYLE. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
