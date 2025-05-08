import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './ArchitectIntro.css';

export default function ArchitectIntro({
  layout = 'left',      // 'left' | 'right' | 'top' | 'bottom'
  imageSrc,             // URL/imported image
  name,                 // string
  introText,            // string
  linkedin,             // URL
  instagram,            // URL
  whatsapp              // URL (e.g. https://wa.me/1234567890)
}) {
  const [imgLoaded, setImgLoaded]     = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (imgLoaded) {
      const t = setTimeout(() => setTextVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, [imgLoaded]);

  return (
    <div className={`intro layout-${layout}`}>
      <img
        src={imageSrc}
        alt={name}
        className={`intro-image${imgLoaded ? ' loaded' : ''}`}
        onLoad={() => setImgLoaded(true)}
      />

      <div className={`intro-text${textVisible ? ' visible' : ''}`}>
        <h2>{name}</h2>
        <p>{introText}</p>
        <div className="social-icons">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}>
              <FaLinkedin />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Instagram`}>
              <FaInstagram />
            </a>
          )}
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`${name} on WhatsApp`}>
              <FaWhatsapp />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
