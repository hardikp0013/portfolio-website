import React from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import { handleContactFormSubmit } from './script'; // Import the function from script.js

export default function Contact() {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    handleContactFormSubmit(e, navigate); // Call the function from script.js
  };

  return (
    <>
      <section className="contact">
        <h1>Contact Me</h1>
        <p>Toronto, Canada, M9W 3J6</p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
          
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}
