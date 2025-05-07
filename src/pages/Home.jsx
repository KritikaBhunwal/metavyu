// src/pages/Home.jsx
import React from 'react';
import CarouselParallax from '../components/CarouselParallax';
import MarqueeServices from '../components/MarqueeServices';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
      <CarouselParallax />
      <MarqueeServices />
        {/* <h1>Home Page</h1>
        <p>This is the home page placeholder.</p> */}
        <Gallery />
      </main>
    </>
  );
}
