// src/components/Gallery.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

import g1 from '../assets/gallery1.jpeg';
import g2 from '../assets/gallery2.jpeg';
import g3 from '../assets/gallery3.jpeg';
import g4 from '../assets/gallery4.jpeg';
import g5 from '../assets/gallery5.jpeg';
import g6 from '../assets/gallery6.jpeg';
import g7 from '../assets/gallery7.jpeg';
import g8 from '../assets/gallery8.jpeg';
import g9 from '../assets/gallery9.jpeg';

const SLIDES = [
  { src: g1, title: 'Skyline Silhouette' },
  { src: g2, title: 'Modern Facade' },
  { src: g3, title: 'Glass & Steel' },
  { src: g4, title: 'Courtyard Calm' },
  { src: g5, title: 'Urban Canopy' },
  { src: g6, title: 'Brutalist Beauty' },
  { src: g7, title: 'Night Lights' },
  { src: g8, title: 'Minimalist Mood' },
  { src: g9, title: 'Horizon View' },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [nextIdx, setNextIdx]   = useState(null);
  const [dir, setDir]           = useState('next');
  const [modalIdx, setModalIdx] = useState(null);
  const previewRef = useRef();

  // parallax‐on‐scroll for preview
  useEffect(() => {
    let ticking = false;
    const maxTranslate = 30;
    const handleScroll = () => {
      if (!previewRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = previewRef.current.getBoundingClientRect();
          const vh = window.innerHeight;
          const pct = (vh - rect.top) / (vh + rect.height);
          const clamped = Math.min(Math.max(pct, 0), 1);
          const translate = (clamped * 2 - 1) * maxTranslate;
          previewRef.current
            .querySelectorAll('.parallax-wrapper')
            .forEach(w => (w.style.transform = `translateY(${translate}px)`));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const openModal = idx => setModalIdx(idx);
  const closeModal = () => setModalIdx(null);

  // NEW: modal navigation
  const goNextModal = e => {
    e.stopPropagation();
    setModalIdx((modalIdx + 1) % SLIDES.length);
  };
  const goPrevModal = e => {
    e.stopPropagation();
    setModalIdx((modalIdx - 1 + SLIDES.length) % SLIDES.length);
  };

  const bottom = nextIdx !== null ? current : null;
  const top    = nextIdx !== null ? nextIdx  : current;
  const slideClass = nextIdx !== null ? `wipe-${dir}` : '';

  return (
    <>
      <div className="gallery-container">
        <div
          className={`gallery-preview ${slideClass}`}
          ref={previewRef}
          onAnimationEnd={onAnimEnd}
        >
          {bottom !== null && (
            <div className="parallax-wrapper">
              <img
                src={SLIDES[bottom].src}
                alt=""
                className="gallery-image previous"
                onClick={() => openModal(bottom)}
              />
            </div>
          )}
          <div className="parallax-wrapper">
            <img
              src={SLIDES[top].src}
              alt=""
              className="gallery-image current"
              onClick={() => openModal(top)}
            />
          </div>

          <button
            className="gallery-button prev"
            onClick={goPrev}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            className="gallery-button next"
            onClick={goNext}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="thumbnails">
          {SLIDES.map((slide, i) => (
            <div key={i} className="thumbnail">
              <img
                src={slide.src}
                alt=""
                className="thumbnail-img"
                onClick={() => slideTo(i, i > current ? 'next' : 'prev')}
              />
              <span className="thumb-title">{slide.title}</span>
            </div>
          ))}
        </div>
      </div>

      {modalIdx !== null && (
        <div className="modal" onClick={closeModal}>
          {/* Prev in modal */}
          <button
            className="modal-button prev"
            onClick={goPrevModal}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <img
            src={SLIDES[modalIdx].src}
            alt={SLIDES[modalIdx].title}
            className="modal-image"
          />

          {/* Next in modal */}
          <button
            className="modal-button next"
            onClick={goNextModal}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>

          {/* Close */}
          <button
            className="modal-close"
            onClick={e => { e.stopPropagation(); closeModal(); }}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
