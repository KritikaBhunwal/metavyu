// src/components/BusinessIntro.jsx
import React from 'react';
import { FaTools, FaDraftingCompass, FaHandshake } from 'react-icons/fa';
import './BusinessIntro.css';

export default function BusinessIntro() {
  return (
    <section className="business-intro">
      <div className="business-overlay" />
      <div className="business-content">
        <h2>METAVYU DESIGNS</h2>
        <h3>Know Us Better</h3>
        <p>
          MetaVyu Designs is a forward-thinking Architectural studio specializing in sustainable architecture,
          innovative construction solutions, and collaborative design consulting bringing visionary projects to life.
        </p>

        <div className="business-categories">
          <a href="#" className="business-category">
            <FaTools className="business-icon" />
            <span>Construction Solutions</span>
          </a>
          <a href="#" className="business-category">
            <FaDraftingCompass className="business-icon" />
            <span>Architecture & Interior Design</span>
          </a>
          <a href="#" className="business-category">
            <FaHandshake className="business-icon" />
            <span>Design Consultation & Collaboration</span>
          </a>
        </div>

        <a href="/projects" className="business-cta">
          Discover More
        </a>
      </div>
    </section>
  );
}