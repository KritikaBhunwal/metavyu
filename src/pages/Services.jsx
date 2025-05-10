// src/pages/BrandStory.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceIntroGrid from '../components/ServiceIntroGrid';
import ValuesRow from '../components/ValuesRow';

export default function Services() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
                <ServiceIntroGrid />
                <ValuesRow />
      </div>
      <Footer />
    </div>
  );
}
