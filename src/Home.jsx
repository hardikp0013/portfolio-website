import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Hardik Pandya, a software developer dedicated to creating efficient and scalable solutions.</p>
        <Link to="/about" className="btn">Learn More About Me</Link>
      </section>
    </>
  );
}
