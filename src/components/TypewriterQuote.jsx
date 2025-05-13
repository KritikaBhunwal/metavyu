// src/components/TypewriterQuotes.jsx
import React, { useState, useEffect } from 'react';
import './TypewriterQuote.css';

const MAIN_TEXT = '“Architecture is the silent storyteller of our sustainable future.” ';
const AUTHOR_TEXT = '– Vyusti Sehrawat';
const FULL_QUOTE = MAIN_TEXT + AUTHOR_TEXT;

export default function TypewriterQuotes({ typingSpeed = 80 }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
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
  }, [typingSpeed]);

  const isDone = displayed.length === FULL_QUOTE.length;
  const hasAuthorStarted = displayed.length > MAIN_TEXT.length;

  // Split out what’s been shown
  const mainPortion = displayed.slice(0, Math.min(displayed.length, MAIN_TEXT.length));
  const authorPortion =
    displayed.length > MAIN_TEXT.length
      ? displayed.slice(MAIN_TEXT.length)
      : '';

  return (
    <div className="typewriter-container">
      <h2 className="typewriter">
        {mainPortion}
        {/* insert line break only when author text exists */}
        {hasAuthorStarted && <br />}
        <span className="author">{authorPortion}</span>
        <span
          className={`cursor${isDone ? ' cursor--stopped' : ''}`}
          aria-hidden={isDone}
        >
          |
        </span>
      </h2>
    </div>
  );
}
