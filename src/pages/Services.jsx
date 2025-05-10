// src/pages/BrandStory.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';
import gallery7 from '../assets/gallery7.jpeg';

export default function Services() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
              <ImageBanner src={gallery7} alt="Banner backdrop" />
      <div style={{ flex: 1 }}>
      </div>
      <Footer />
    </div>
  );
}
