// src/components/ValuesRow.jsx
import React, { useRef, useState, useEffect } from 'react';
import { FaRegEye, FaHandshake, FaPalette, FaLeaf, FaRocket } from 'react-icons/fa';
import './ValuesRow.css';

export default function ValuesRow() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const values = [
    { icon: <FaRegEye />,    title: 'Transparency',  description: 'Open communication and clear processes at every step.' },
    { icon: <FaHandshake />, title: 'Trust',         description: 'Building reliable relationships through integrity.' },
    { icon: <FaPalette />,   title: 'Creativity',    description: 'Innovative designs that inspire and engage.' },
    { icon: <FaLeaf />,      title: 'Sustainability', description: 'Eco-friendly practices for a greener future.' },
    { icon: <FaRocket />,    title: 'Innovation',    description: 'Pushing boundaries with cutting-edge solutions.' },
  ];

  return (
    <div className='values-container'>
      <h2 style={{ 
        fontFamily: 'amandine, serif', 
        fontSize: '2.5rem',
        fontWeight: 400, 
        fontStyle: 'normal', 
        textAlign: 'center',
        padding: '2rem 0',
        marginTop: '2rem',  
        marginBottom: 'clamp(-2rem, -5vw, -1rem)',
      }}>
        OUR VALUES
      </h2>
      <div ref={ref} className={`values-row${inView ? ' in-view' : ''}`}>
        {values.map((v, i) => (
          <div className="value-item" key={i}>
            <div className="icon-wrapper">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
