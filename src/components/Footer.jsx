import React from 'react';
import './Footer.css';
import logo from '../assets/MetaVyu.png';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo-container">
          <img src={logo} alt="MetaVyu logo" className="footer__logo" />
          <div className="footer__logo-text">
            <p className="footer__tagline">Your Trusted Design Partner</p>
            <p className="footer__copy">&copy; {year} MetaVyuDesigns. All rights reserved.</p>
          </div>
        </div>

        <div className="footer__social-icons">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}