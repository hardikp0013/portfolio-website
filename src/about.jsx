import React from 'react';
import profileImage from './assets/profile.jpg';  // Import image
import resumeFile from './assets/resume.pdf';    // Import resume

export default function About() {
  return (
    <>
      <section className="about">
        <h1>About Me</h1>
        <img src={profileImage} alt="Hardik Pandya" className="profile" />
        <p>Hi, I'm Hardik Pandya, a software developer based in Toronto, Canada. I specialize in Agile Methodologies, Performance Optimization, and Code Quality Assurance. With a passion for clean and efficient code, I strive to deliver high-quality solutions for every project.</p>
        <a href={resumeFile} download className="btn">Download My Resume</a>
      </section>
    </>
  );
}
