import React, { useEffect, useRef, useState } from 'react';
import './MetavyuDesign.css';
import bgImage from '../assets/brandstory3.png';

export default function MetavyuDesign() {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run animation only once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const handleConnectClick = () => {
    window.location.href = '/connect';
  };

  return (
    <section
      className="metavyu-section"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-labelledby="metavyu-heading"
    >
      <div className="metavyu-overlay" />
      <div
        ref={contentRef}
        className={`metavyu-content ${isVisible ? 'visible' : ''}`}
      >
        <h2 id="metavyu-heading" className="metavyu-title">Metavyu Design</h2>
        <hr className="metavyu-hr" />
        <ul className="metavyu-points">
          <li>Modern Designs That Prioritize Functionality</li>
          <li>Where Aesthetics Meet Sustainable Practices</li>
          <li>A Signature Style—Distinct and Personal</li>
        </ul>
        <p className="metavyu-description">
          Since our founding, we’ve pushed the boundaries of architecture and design to create spaces
          that are both beautiful and responsible. Through collaboration, creativity, and steadfast
          commitment to the planet, our work speaks for itself—shaping the environments of tomorrow.
        </p>
        <button className="metavyu-button" onClick={handleConnectClick}>Let's Connect</button>
      </div>
    </section>
  );
}
