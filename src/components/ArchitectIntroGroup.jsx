// src/components/ArchitectIntroGroup.jsx
import React from 'react';
import ArchitectIntro from './ArchitectIntro';

import vyusti from '../assets/vyusti.png';
import aria   from '../assets/aria.png';

export default function ArchitectIntroGroup() {
  return (
    <div>
      {/* 1st person: default corners */}
      <ArchitectIntro
        layout="left"
        imageSrc={vyusti}
        name="Vyusti Sehrawat"
        introText="Vyusti blends form and function in every design—creating spaces that inspire and endure."
        linkedin="https://linkedin.com/in/vyusti"
        instagram="https://instagram.com/vyusti"
        whatsapp="https://wa.me/1234567890"
      />

      {/* 2nd person: flipCorners */}
      <ArchitectIntro
        layout="right"
        imageSrc={aria}
        name="Aria Kapur"
        introText="Aria’s passion for sustainable materials drives her to innovate green architecture solutions."
        linkedin="https://linkedin.com/in/aria"
        instagram="https://instagram.com/aria"
        whatsapp="https://wa.me/0987654321"
        flipCorners
      />
    </div>
  );
}
