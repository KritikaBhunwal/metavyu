// src/pages/Connect.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArchitectIntroGrid from '../components/ArchitectIntroGrid';
import ValuesRow from '../components/ValuesRow';
import ContactForm from '../components/ContactForm';
import gallery2 from '../assets/gallery2.jpeg';
import ImageBanner from '../components/ImageBanner';

export default function Connect() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <ImageBanner src={gallery2} alt="Banner backdrop" />
      <div style={{ flex: 1 }}>
                <ArchitectIntroGrid />
                <ValuesRow />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
