import React from 'react';
import './styles.css'; // Ensure correct path
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';

export default function Project() {
  return (
    <>
      <section className="projects">
        <h1>My Projects</h1>
        <div className="project">
          <img src={project1} alt="Project 1" />
          <h3>Project 1</h3>
          <p>Developed a scalable web application using React and Node.js, improving performance by 30%.</p>
        </div>
        <div className="project">
          <img src={project2} alt="Project 2" />
          <h3>Project 2</h3>
          <p>Implemented a mobile app for iOS and Android using Flutter, reducing development time by 20%.</p>
        </div>
        <div className="project">
          <img src={project3} alt="Project 3" />
          <h3>Project 3</h3>
          <p>Optimized database queries for a high-traffic e-commerce platform, reducing latency by 40%.</p>
        </div>
      </section>
    </>
  );
}