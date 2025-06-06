// src/pages/Home.js
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CarouselParallax from "../components/CarouselParallax";
import MarqueeServices from "../components/MarqueeServices";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import ValuesRow from "../components/ValuesRow";
import ProjectGrid from "../components/ProjectGrid";
import TypewriterQuote from "../components/TypewriterQuote";
import BrandStorySection from "../components/BrandStorySection";
import MetavyuDesign from "../components/MetavyuDesign";
import "./Home.css";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  // 1) Fire as soon as browser load event has happened
  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      window.addEventListener(
        "load",
        () => setPageLoaded(true),
        { once: true }
      );
    }
  }, []);

  // 2) Keep your scroll-to-top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 3) Don’t mount any of the animated components until load has fired
  if (!pageLoaded) {
    return null; // or <div className="spinner">Loading...</div>
  }

  return (
    <>
      <main>
        <Navbar />
        <CarouselParallax />
        <TypewriterQuote />
        <BrandStorySection />
        <MetavyuDesign />
        <ProjectGrid />
        <ValuesRow />
        <h2
          style={{
            fontFamily: "amandine, serif",
            fontSize: "2.5rem",
            fontWeight: 400,
            fontStyle: "normal",
            textAlign: "center",
            padding: "4rem 0",
            marginTop: "0rem",
          }}
        >
          OUR WORK
        </h2>
        <Gallery />
        <MarqueeServices />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
