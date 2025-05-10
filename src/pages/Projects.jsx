// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import FilterableProjects from '../components/FilterableProjects';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: '1' }}>
        <Navbar />
        <FilterableProjects />
        {/* <Gallery /> */}
      </main>
      <Footer />
    </div>
  );
}
