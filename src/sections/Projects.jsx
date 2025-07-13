import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card card-0">
          <h3>Social Media App</h3>
          <p>A MERN-based responsive social media platform with real-time chat and post features.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-card card-1">
          <h3>Portfolio Website</h3>
          <p>My personal portfolio showcasing my skills, projects, and contact form.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-card card-2">
          <h3>E-commerce Platform</h3>
          <p>Full-stack application with cart, payment, and admin dashboard.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-card card-3">
          <h3>Chat App</h3>
          <p>Real-time chat app using Socket.IO and Node.js with authentication and themes.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-card card-4">
          <h3>Weather Dashboard</h3>
          <p>Weather forecast UI using public APIs and React hooks.</p>
          <a href="#">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
