import React from 'react';
import './Skills.css';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.svg';
import githubIcon from '../assets/github.png';
import nodejsIcon from '../assets/nodejs.png';
import mongodbIcon from '../assets/mongodb.png';
import dockerIcon from '../assets/docker.png';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JAVASCRIPT', icon: jsIcon },
  { name: 'REACT JS', icon: reactIcon },
  { name: 'GITHUB', icon: githubIcon },
  { name: 'NODE JS', icon: nodejsIcon },
  { name: 'MONGODB', icon: mongodbIcon },
  { name: 'DOCKERS', icon: dockerIcon },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>What I do</h2>
      <p>
        I build responsive, scalable web applications using the MERN stack.
        Below are the technologies I work with.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
