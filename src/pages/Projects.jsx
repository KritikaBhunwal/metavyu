// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Gallery />
        <h1>Project Page</h1>
        <p>This is the home page placeholder.</p>
        <Footer />
      </main>
    </>
  );
}
