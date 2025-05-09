import React from 'react';
import './IntroSection.css';

export default function IntroSection() {
  return (
    <div className="intro-section">
      <h2>Our Architectural Services</h2>
      <p>
        At MetaVyu, we deliver end-to-end architectural solutions—from master
        planning and sustainable design to bespoke interiors and urban
        revitalization. 
      </p>
    <button 
      className="explore-projects-button" 
      onClick={() => window.location.href = '/projects'}
    >
      Explore All Projects
    </button>
    </div>
  );
}
