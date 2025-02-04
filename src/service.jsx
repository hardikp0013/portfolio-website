import React from 'react';

export default function Services() {
  return (
    <>
      <section className="services">
        <h1>Services I Offer</h1>
        <div className="service-container">
          <div className="service-card">
            <h3>General Programming</h3>
            <p>Writing clean, efficient, and optimized code across various programming languages.</p>
          </div>
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Building responsive and scalable web applications using modern technologies.</p>
          </div>
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>Creating high-performance mobile applications for iOS and Android.</p>
          </div>
          <div className="service-card">
            <h3>Code Quality Assurance</h3>
            <p>Ensuring best coding practices and performing rigorous testing to maintain quality.</p>
          </div>
          <div className="service-card">
            <h3>Performance Optimization</h3>
            <p>Optimizing applications and databases for improved speed and efficiency.</p>
          </div>
        </div>
      </section>
    </>
  );
}
