// src/components/TypewriterQuotes.jsx
import React, { useState, useEffect } from 'react';
import './TypewriterQuote.css';

const QUOTES = [
  '“Architecture is the silent storyteller of our sustainable future.” – Vyusti Sehrawat',
  '“Every beam and column must whisper of innovation, responsibility, and beauty.” – Vyusti Sehrawat',
  '“True modernity in construction lives where design meets ecological empathy.” – Vyusti Sehrawat',
  '“Our cities will thrive when we build with both purpose and planet in mind.” – Vyusti Sehrawat',
];

export default function TypewriterQuotes({ typingSpeed = 60, pauseTime = 2500 }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let charIdx = 0;
    setDisplayed('');
    const typeInterval = setInterval(() => {
      setDisplayed(QUOTES[quoteIndex].slice(0, ++charIdx));
      if (charIdx === QUOTES[quoteIndex].length) {
        clearInterval(typeInterval);
        // after full quote is typed, wait then move to next
        setTimeout(() => {
          setQuoteIndex((quoteIndex + 1) % QUOTES.length);
        }, pauseTime);
      }
    }, typingSpeed);
    
    return () => clearInterval(typeInterval);
  }, [quoteIndex, typingSpeed, pauseTime]);

  return (
    <div className="typewriter-container">
      <h2 className="typewriter">{displayed}<span className="cursor">|</span></h2>
    </div>
  );
}
