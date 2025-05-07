import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './MarqueeServices.css';

export default function MarqueeServices() {
  const marqueeRef = useRef();

  useEffect(() => {
    // GSAP context makes cleanup easy
    const ctx = gsap.context(() => {
      gsap.to('.marquee__inner', {
        xPercent: -30,
        ease: 'none',
        repeat: -1,
        duration: 60,           // adjust speed here
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="marquee" ref={marqueeRef}>
      <div className="marquee__inner">
        <span className="marquee__item">
          • ARCHITECTURE
        </span>
        <span className="marquee__item">
          • INDUSTRIAL DESIGN
        </span>
        <span className="marquee__item">
          • INTERIOR DESIGN AND DECORATION
        </span>
        <span className="marquee__item">
          • ARCHITECTURE
        </span>
        <span className="marquee__item">
          • INDUSTRIAL DESIGN
        </span>
        <span className="marquee__item">
          • INTERIOR DESIGN AND DECORATION
        </span>
      </div>
    </div>
  );
}
