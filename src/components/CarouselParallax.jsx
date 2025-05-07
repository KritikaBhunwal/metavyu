// src/components/CarouselParallax.jsx
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
  {
    src: slide1,
    link: 'https://www.google.com',
    title: 'Innovative Architecture',
    subtitle: 'Blending form and function seamlessly',
  },
  {
    src: slide2,
    link: 'https://mail.google.com',
    title: 'Urban Design Concepts',
    subtitle: 'Redefining city landscapes for tomorrow',
  },
  {
    src: slide3,
    link: 'https://kritikabhunwal.com',
    title: 'Sustainable Structures',
    subtitle: 'Eco-friendly materials and designs',
  },
  {
    src: slide4,
    link: 'https://www.instagram.com',
    title: 'Creative Interiors',
    subtitle: 'Spaces that tell your story',
  },
  {
    src: slide5,
    link: 'https://www.facebook.com',
    title: 'Modern Landmarks',
    subtitle: 'Iconic designs shaping skylines',
  },
  {
    src: slide6,
    link: 'https://www.behance.net',
    title: 'Digital Architecture',
    subtitle: 'Virtual spaces and interactive designs',
  },
];

const AUTO_DELAY = 4000;  // 4s auto-advance
const ANIM_DURATION = 800; //ms, must match CSS

export default function CarouselParallax() {
  const [current, setCurrent] = useState(0);
  const [nextIdx, setNextIdx] = useState(null);
  const [dir, setDir] = useState('next');

  // parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset * 0.3;
      document
        .querySelectorAll('.parallax-wrapper')
        .forEach(w => (w.style.transform = `translateY(${y}px)`));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      if (nextIdx === null) slideTo((current + 1) % SLIDES.length, 'next');
    }, AUTO_DELAY);
    return () => clearInterval(id);
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
  const goPrev = () =>
    slideTo((current - 1 + SLIDES.length) % SLIDES.length, 'prev');

  const onIndicatorClick = i => {
    if (i === current || nextIdx !== null) return;
    const isNext =
      i === (current + 1) % SLIDES.length ||
      (current === SLIDES.length - 1 && i === 0);
    slideTo(i, isNext ? 'next' : 'prev');
  };

  const bottom = nextIdx !== null ? current : null;
  const top    = nextIdx !== null ? nextIdx  : current;
  const slideClass = nextIdx !== null ? `wipe-${dir}` : '';

  return (
    <div className="carousel-container">
      <div className={`carousel-slide ${slideClass}`}>
        {bottom !== null && (
          <div className="parallax-wrapper">
            <a href={SLIDES[bottom].link} target="_blank" rel="noopener noreferrer">
              <img
                src={SLIDES[bottom].src}
                alt=""
                className="carousel-image previous"
              />
            </a>
          </div>
        )}
        <div className="parallax-wrapper">
          <a href={SLIDES[top].link} target="_blank" rel="noopener noreferrer">
            <img
              src={SLIDES[top].src}
              alt=""
              className="carousel-image current"
              onAnimationEnd={onAnimEnd}
            />
          </a>
          <div className="dark-overlay" />
          <div className="slide-overlay">
            <h2 className="slide-title">{SLIDES[top].title}</h2>
            <p className="slide-subtitle">{SLIDES[top].subtitle}</p>
            <a
              href={SLIDES[top].link}
              className="slide-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      <button className="carousel-button prev" onClick={goPrev} aria-label="Previous">
        <FaChevronLeft />
      </button>
      <button className="carousel-button next" onClick={goNext} aria-label="Next">
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
