import React, { useEffect, useRef } from 'react';
import './ProcessTimeline.css';
import { FaRegComments, FaPencilRuler, FaDraftingCompass, FaHardHat, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { title: 'Consultation',      description: 'Initial meeting to understand your vision, space, and budget.',               icon: <FaRegComments />,      color: '#000' },
  { title: 'Concept Design',    description: 'We develop moodboards, sketches, and space planning.',                       icon: <FaPencilRuler />,      color: '#000' },
  { title: 'Detailed Planning', description: 'Technical drawings, 3D views, and material selection.',                    icon: <FaDraftingCompass />,  color: '#000' },
  { title: 'Execution',         description: 'On-site coordination, vendor collaboration, and quality checks.',           icon: <FaHardHat />,          color: '#000' },
  { title: 'Handover',          description: 'Final walkthrough, styling, and project delivery.',                         icon: <FaCheckCircle />,      color: '#000' },
];

export default function ProcessTimeline() {
  const timelineRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const stepEls = timelineRef.current.querySelectorAll('.timeline-step');
    stepEls.forEach((step, i) => {
      step.style.transitionDelay = `${i * 100}ms`;
      observer.observe(step);
    });

    return () => stepEls.forEach(step => observer.unobserve(step));
  }, []);

  return (
    <section className="process-timeline" aria-label="Design Process Timeline">
      <h2 className="timeline-heading">OUR PROCESS</h2>
      <div className="timeline-container" ref={timelineRef}>
        {steps.map((step, index) => (
          <div className="timeline-step" key={index} tabIndex="0">
            <div
              className="timeline-marker"
              style={{ backgroundColor: step.color }}
              aria-hidden="true"
            >
              {step.icon}
            </div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}