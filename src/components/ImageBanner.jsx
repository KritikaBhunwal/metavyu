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

  const overlayStyle = {
    position: 'absolute',
    inset: 0,               // shorthand for top:0; right:0; bottom:0; left:0;
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={containerStyle} role="img" aria-label={alt}>
      <div style={overlayStyle} />
    </div>
  );
}
// Removed redundant code outside the function