import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Connect from './pages/Connect';
import Projects from './pages/Projects';
import Commercial from './pages/Projects/Commercial';
import Residential from './pages/Projects/Residential';
import International from './pages/Projects/International';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <main className="content">
      {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/commercial" element={<Commercial />} />
      <Route path="/projects/residential" element={<Residential />} />
      <Route path="/projects/international" element={<International />} />
    </Routes>
    {/* <Footer /> */}
    </main>
  );
}
