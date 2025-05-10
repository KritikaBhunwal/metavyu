// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import FilterableProjects from '../components/FilterableProjects';
import ImageBanner from '../components/ImageBanner';
import gallery8 from '../assets/gallery8.jpeg';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: '1' }}>
        <Navbar />
        <ImageBanner src={gallery8} alt="Banner backdrop" />
                <h2
          style={{
            fontFamily: "benton-modern-display-extra, serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            fontStyle: "normal",
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "-5rem",
          }}
        >
          OUR PROJECTS
        </h2>
        <FilterableProjects />
        {/* <Gallery /> */}
      </main>
      <Footer />
    </div>
  );
}
