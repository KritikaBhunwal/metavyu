// src/pages/Home.jsx
import React from 'react';
import CarouselParallax from '../components/CarouselParallax';
import MarqueeServices from '../components/MarqueeServices';

export default function Home() {
  return (
    <>
      <main>
      <CarouselParallax />
      <MarqueeServices />
        {/* <h1>Home Page</h1>
        <p>This is the home page placeholder.</p> */}
      </main>
    </>
  );
}
