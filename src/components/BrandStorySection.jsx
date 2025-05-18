// src/components/BrandStorySection.jsx
import React from 'react';
import './BrandStorySection.css';
import bgImage from '../assets/brandstory4.png';

export default function BrandStorySection() {
  return (
    <section
      className="brandstory-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="brandstory-overlay" />
      <div className="brandstory-content">
        <h2 className="brandstory-title">Brand Story</h2>
        <hr className="brandstory-hr" />
        <ul className="brandstory-points">
          <li>Our journey began with a simple idea of innovation.</li>
          <li>We believe in merging design with sustainability.</li>
          <li>Every project tells its own unique story.</li>
        </ul>
        <p className="brandstory-description">
          Since our founding, we’ve pushed the boundaries of architecture and
          design to create spaces that are both beautiful and responsible.
          Through collaboration, creativity, and steadfast commitment to the
          planet, our work speaks for itself—shaping the environments of tomorrow.
        </p>
        <button className="brandstory-button">Explore</button>
      </div>
    </section>
  );
}
