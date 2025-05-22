import React, { useState, useEffect, useRef } from 'react';
import './TypewriterQuote.css';

const MAIN_TEXT = '“Architecture is the silent storyteller of our sustainable future.” ';
const AUTHOR_TEXT = '– Vyusti Sehrawat';
const FULL_QUOTE = MAIN_TEXT + AUTHOR_TEXT;

export default function TypewriterQuotes({ typingSpeed = 80 }) {
  const [displayed, setDisplayed] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let idx = 0;
    let timeoutId;

    const tick = () => {
      setDisplayed(FULL_QUOTE.slice(0, idx + 1));
      idx += 1;
      if (idx < FULL_QUOTE.length) {
        timeoutId = setTimeout(tick, typingSpeed);
      }
    };

    timeoutId = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [hasAnimated, typingSpeed]);

  const isDone = displayed.length === FULL_QUOTE.length;
  const mainPortion = displayed.slice(0, MAIN_TEXT.length);
  const authorPortion = displayed.length > MAIN_TEXT.length ? displayed.slice(MAIN_TEXT.length) : '';

  return (
    <div ref={containerRef} className="typewriter-container">
      <h2 className="typewriter">
        {mainPortion}
        {authorPortion && <br />}
        <span className="author">{authorPortion}</span>
        <span className={`cursor${isDone ? ' cursor--stopped' : ''}`} aria-hidden={isDone}>
          |
        </span>
      </h2>
    </div>
  );
}
