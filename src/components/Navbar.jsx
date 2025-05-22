// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/MetaVyu.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/services', label: 'SERVICES' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/connect', label: 'CONNECT' },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" onClick={closeMenu}>
        <img src={logo} alt="Metavyu logo" />
      </Link>

      <button
        className="navbar__toggle"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={closeMenu}
              className={pathname === to ? 'active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
