import React from 'react';
import './ProjectScroll.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';

const projects = [
  { src: slide1, category: 'Architecture' },
  { src: slide2, category: 'Interior' },
  { src: slide3, category: 'Landscape' },
  { src: slide4, category: 'Urban' },
  { src: slide5, category: 'Commercial' },
];

export default function ProjectScroll() {
  return (
    <div className="projects-scroller">
      {projects.map((proj, i) => (
        <div className="project-card" key={i}>
          <a
            href={`/projects?category=${proj.category.toLowerCase()}`}
            className="project-pill"
          >
            {proj.category}
          </a>
          <img src={proj.src} alt={proj.category} />
        </div>
      ))}
    </div>
  );
}
