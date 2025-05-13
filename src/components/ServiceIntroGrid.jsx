import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './ServiceIntroGrid.css';

import img1 from '../assets/vyusti1.png';
import img2 from '../assets/vyusti2.png';
import img3 from '../assets/vyusti3.png';
import img4 from '../assets/vyusti4.png';

function ArchitectIntro({ src, name, introText, layout, linkedin, instagram }) {
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

  return (
    <div
      ref={ref}
      className={`intro-block layout-${layout} ${inView ? 'in-view' : ''}`}
    >
      <img src={src} alt={name} loading="lazy" className="intro-image" />
      <div className="intro-text">
        <h2>{name}</h2>
        <p>{introText}</p>
        <div className="social-icons">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
          >
            <FaLinkedin />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on Instagram`}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServiceIntroGrid() {
  const items = [
    {
      src: img1,
      name: 'Vyusti Sehrawat',
      introText:
        'Vyusti blends form and function in every design—creating spaces that inspire and endure.',
      layout: 'left',
    //   linkedin: 'https://www.linkedin.com/in/ar-vyusti-s-9a15921aa/',
    //   instagram: 'https://www.instagram.com/metavyu_designs/',
    },
    {
      src: img2,
      name: 'Aria Kapur',
      introText:
        'Aria’s passion for sustainable materials drives her to innovate green architecture solutions.',
      layout: 'right',
    //   linkedin: 'https://www.linkedin.com/in/ar-vyusti-s-9a15921aa/',
    //   instagram: 'https://www.instagram.com/metavyu_designs/',
    },
    {
      src: img3,
      name: 'Rohan Mehta',
      introText:
        'Rohan specializes in urban revitalization, transforming old districts into thriving communities.',
      layout: 'left',
    //   linkedin: 'https://www.linkedin.com/in/ar-vyusti-s-9a15921aa/',
    //   instagram: 'https://www.instagram.com/metavyu_designs/',
    },
    {
      src: img4,
      name: 'Lina Das',
      introText:
        'Lina’s sleek minimalism redefines residential landscapes with light, shadow, and texture.',
      layout: 'right',
    //   linkedin: 'https://www.linkedin.com/in/ar-vyusti-s-9a15921aa/',
    //   instagram: 'https://www.instagram.com/metavyu_designs/',
    },
  ];

  return (
    <>
      <h2 style={{ 
        fontFamily: 'amandine, serif', 
        fontSize: '2.5rem',
        fontWeight: 400, 
        fontStyle: 'normal', 
        textAlign: 'center',
        padding: '2rem 0',
      }}>
        OUR SERVICES
      </h2>
      <div className="service-grid">
        {items.map((item, i) => (
          <ServiceIntro key={i} {...item} />
        ))}
      </div>
    </>
  );
}
