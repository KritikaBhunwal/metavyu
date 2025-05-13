// src/components/ImageBanner.jsx
import React from 'react';

export default function ImageBanner({ src, alt = '' }) {
const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '60vh', // 50% of the viewport height
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

  // Removed overlayStyle as per the request

  return (
    <div style={containerStyle} role="img" aria-label={alt}>
    </div>
  );
}
// Removed redundant code outside the function