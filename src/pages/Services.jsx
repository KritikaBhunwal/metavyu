// src/pages/BrandStory.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArchitectIntroGrid from '../components/ArchitectIntroGrid';
import ValuesRow from '../components/ValuesRow';

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Services</h1>
        <p>Placeholder for your services description.</p>
        <ArchitectIntroGrid />
        <ValuesRow />
      </main>
      <Footer />
    </>
  );
}
