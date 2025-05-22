import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CarouselParallax.css';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.jpg';

const SLIDES = [
  { src: slide1, link: 'https://www.instagram.com/metavyu_designs/', title: 'Innovative Architecture', subtitle: 'Blending form and function seamlessly' },
  { src: slide2, link: 'https://www.instagram.com/metavyu_designs/', title: 'Urban Design Concepts', subtitle: 'Redefining city landscapes for tomorrow' },
  { src: slide3, link: 'https://www.instagram.com/metavyu_designs/', title: 'Sustainable Structures', subtitle: 'Eco-friendly materials and designs' },
  { src: slide4, link: 'https://www.instagram.com/metavyu_designs/', title: 'Creative Interiors', subtitle: 'Spaces that tell your story' },
  { src: slide5, link: 'https://www.instagram.com/metavyu_designs/', title: 'Modern Landmarks', subtitle: 'Iconic designs shaping skylines' },
  { src: slide6, link: 'https://www.instagram.com/metavyu_designs/', title: 'Digital Architecture', subtitle: 'Virtual spaces and interactive designs' },
];

const AUTO_DELAY = 4000;
const ANIM_DURATION = 800;

export default function CarouselParallax() {
  const [current, setCurrent] = useState(0);
  const [nextIdx, setNextIdx] = useState(null);
  const [dir, setDir] = useState('next');

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset * 0.3;
      document.querySelectorAll('.parallax-wrapper').forEach(el => {
        el.style.transform = `translateY(${yOffset}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextIdx === null) goNext();
    }, AUTO_DELAY);
    return () => clearInterval(interval);
  }, [current, nextIdx]);

  const slideTo = (idx, direction) => {
    if (nextIdx !== null || idx === current) return;
    setDir(direction);
    setNextIdx(idx);
  };

  const onAnimEnd = () => {
    setCurrent(nextIdx);
    setNextIdx(null);
  };

  const goNext = () => slideTo((current + 1) % SLIDES.length, 'next');
  const goPrev = () => slideTo((current - 1 + SLIDES.length) % SLIDES.length, 'prev');

  const onIndicatorClick = (i) => {
    if (i === current || nextIdx !== null) return;
    slideTo(i, i > current ? 'next' : 'prev');
  };

  const bottom = nextIdx !== null ? current : null;
  const top = nextIdx !== null ? nextIdx : current;
  const slideClass = nextIdx !== null ? `wipe-${dir}` : '';
  const { src, link, title, subtitle } = SLIDES[top];

  return (
    <div className="carousel-container">
      <div className={`carousel-slide ${slideClass}`} style={{ animationDuration: `${ANIM_DURATION}ms` }} onAnimationEnd={onAnimEnd}>
        {bottom !== null && (
          <div className="parallax-wrapper">
            <a href={SLIDES[bottom].link} target="_blank" rel="noopener noreferrer">
              <img src={SLIDES[bottom].src} alt={SLIDES[bottom].title} className="carousel-image previous" />
            </a>
          </div>
        )}

        <div className="parallax-wrapper">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={title} className="carousel-image current" />
          </a>
          <div className="dark-overlay" />
          <div className="slide-overlay">
            <h2 className="slide-title">{title}</h2>
            <p className="slide-subtitle">{subtitle}</p>
            <a href={link} className="slide-cta" target="_blank" rel="noopener noreferrer">
              Explore
            </a>
          </div>
        </div>
      </div>

      <button className="carousel-button prev" onClick={goPrev} aria-label="Previous Slide">
        <FaChevronLeft />
      </button>
      <button className="carousel-button next" onClick={goNext} aria-label="Next Slide">
        <FaChevronRight />
      </button>

      <div className="carousel-indicators">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`indicator${i === (nextIdx ?? current) ? ' active' : ''}`}
            onClick={() => onIndicatorClick(i)}
          />
        ))}
      </div>
    </div>
  );
} 
