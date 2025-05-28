import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
