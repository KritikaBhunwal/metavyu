import React from 'react';
import IntroSection from './IntroSection';
import ProjectScroll from './ProjectScroll';
import './ProjectGrid.css';

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      <IntroSection />
      <ProjectScroll />
    </div>
  );
}
