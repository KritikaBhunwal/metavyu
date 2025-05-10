// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import CarouselParallax from "../components/CarouselParallax";
import MarqueeServices from "../components/MarqueeServices";
import ArchitectIntroGroup from "../components/ArchitectIntroGroup";
import Footer from "../components/Footer";
import ArchitectIntroGrid from "../components/ArchitectIntroGrid";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import ValuesRow from "../components/ValuesRow";
import ProjectGrid from "../components/ProjectGrid";
import TypewriterQuote from "../components/TypewriterQuote";
import BusinessIntro from "../components/BusinessIntro";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <CarouselParallax />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            padding: "1rem",
          }}
        >
          <div style={{ width: "100%", marginBottom: "1rem" }}>
            <TypewriterQuote />
          </div>
          <div style={{ width: "100%" }}>
            <BusinessIntro />
          </div>
        </div>

        <ProjectGrid />
        <ValuesRow />
        <h2
          style={{
            fontFamily: "benton-modern-display-extra, serif",
            fontSize: "2rem",
            fontWeight: 700,
            fontStyle: "normal",
            textAlign: "center",
            padding: "1.5rem 0",
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
