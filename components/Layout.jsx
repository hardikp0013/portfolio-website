import React from 'react';
import { Link } from 'react-router-dom';
import '../public/styles/styles.css'; // Importing the CSS file
import logo from '../src/assets/logo.jpeg'; // Ensure the path to your logo is correct

export default function Layout() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Hardik Pandya Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}