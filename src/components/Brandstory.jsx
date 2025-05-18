// src/components/ImageBanner.jsx
import React from 'react';

export default function ImageBanner({ src, alt = '' }) {
const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '20vh',
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

if (typeof window !== 'undefined' && window.matchMedia) {
  if (window.matchMedia('(min-width: 600px)').matches) {
    containerStyle.height = '60vh';
  }
}

  // Removed overlayStyle as per the request

  return (
    <div style={containerStyle} role="img" aria-label={alt}>
    </div>
  );
}
// Removed redundant code outside the function