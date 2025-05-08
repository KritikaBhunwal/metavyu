// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import CarouselParallax from '../components/CarouselParallax';
import MarqueeServices from '../components/MarqueeServices';
import ArchitectIntroGroup from '../components/ArchitectIntroGroup';
import Footer from '../components/Footer';
import ArchitectIntroGrid from '../components/ArchitectIntroGrid';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <CarouselParallax />
        <MarqueeServices />
        <ArchitectIntroGrid />
        <h2 style={{ 
          fontFamily: 'benton-modern-display-extra, serif', 
          fontSize: '2.5rem',
          fontWeight: 700, 
          fontStyle: 'normal', 
          textAlign: 'center',
          padding: '2rem 0', 
        }}>
          OUR PROJECTS
        </h2>
        <Gallery />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
