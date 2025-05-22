// src/components/MetavyuDesign.jsx
import React from 'react';
import './MetavyuDesign.css';
import bgImage from '../assets/brandstory3.png';

export default function MetavyuDesign() {
  return (
    <section
      className="metavyu-section"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-labelledby="metavyu-heading"
    >
      <div className="metavyu-overlay" />
      <div className="metavyu-content">
        <h2 id="metavyu-heading" className="metavyu-title">Metavyu Design</h2>
        <hr className="metavyu-hr" />
        <ul className="metavyu-points">
          <li>Our journey began with a simple idea of innovation.</li>
          <li>We believe in merging design with sustainability.</li>
          <li>Every project tells its own unique story.</li>
        </ul>
        <p className="metavyu-description">
          Since our founding, we’ve pushed the boundaries of architecture and design to create spaces
          that are both beautiful and responsible. Through collaboration, creativity, and steadfast
          commitment to the planet, our work speaks for itself—shaping the environments of tomorrow.
        </p>
        <button className="metavyu-button">Explore</button>
      </div>
    </section>
  );
}
