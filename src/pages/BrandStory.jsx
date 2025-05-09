// src/pages/BrandStory.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArchitectIntrogrid from '../components/ArchitectIntrogrid';
import ValuesRow from '../components/ValuesRow';

export default function BrandStory() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Brand Story</h1>
        <p>Placeholder for your brand’s story.</p>
        <ArchitectIntrogrid />
        <ValuesRow />
      </main>
      <Footer />
    </>
  );
}
