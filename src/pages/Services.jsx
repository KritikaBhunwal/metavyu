import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageBanner from '../components/ImageBanner';
import AnimatedStats from '../components/AnimatedStats';
import Offerings from '../components/Offerings';
import ProcessTimeline from '../components/ProcessTimeline';
import FAQ from '../components/FAQ';
// import ContactForm from '../components/ContactForm';
import gallery7 from '../assets/gallery7.jpeg';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <ImageBanner src={gallery7} alt="Banner backdrop" />
      <div style={{ flex: 1 }}>
        {/* You can add intro or text here if needed */}
      </div>
      <ProcessTimeline />
      <Offerings />
            <AnimatedStats />

      <FAQ />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}
