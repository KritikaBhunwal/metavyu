import React, { useEffect, useRef, useState } from 'react';
import './BrandStorySection.css';
import bgImage from '../assets/brandstory4.png';

export default function BrandStorySection() {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
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

  const handleServicesClick = () => {
    window.location.href = '/services';
  };

  return (
    <section
      className="brandstory-section"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-labelledby="brandstory-heading"
    >
      <div className="brandstory-overlay" />
      <div
        ref={contentRef}
        className={`brandstory-content ${isVisible ? 'visible' : ''}`}
      >
        <h2 id="brandstory-heading" className="brandstory-title">Brand Story</h2>
        <hr className="brandstory-hr" />
        <ul className="brandstory-points">
          <li>Beautiful Architecture Across the Country</li>
          <li>Timeless Interior Design That Lasts a Lifetime</li>
          <li>End-to-End Turnkey Construction Services</li>
        </ul>
        <p className="brandstory-description">
          Designing and Building Inspired Spaces. Metavyu Designs is an architecture and interior design firm that also provides construction and consultation services. In essence, Metavyu Designs is a one-stop solution for end-to-end design and build needs - from initial concept through construction.
        </p>
        <button
          className="brandstory-button"
          onClick={handleServicesClick}
        >
          Our Services
        </button>
      </div>
    </section>
  );
}
