// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/MetaVyu.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on window resize above breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="metavyu logo" />
      </Link>

      <button
        className="navbar__toggle"
        onClick={() => setIsOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/connect" onClick={() => setIsOpen(false)}>Connect</Link></li>
      </ul>
    </nav>
);
}
