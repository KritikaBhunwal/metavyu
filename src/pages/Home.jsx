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
import BrandStory from "../components/BrandStory";
import BrandStoryImage from "../assets/BrandStory.jpg";
import BrandStoryImage2 from "../assets/BrandStory2.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <CarouselParallax />

        <div className="hero-section">
          <div className="hero-text">
            <TypewriterQuote />
          </div>
          <div className="hero-image">
            <a href="/brand-story">
              <BrandStory src={BrandStoryImage} alt="Banner backdrop" />
            </a>
          </div>
        </div>
        <div className="hero-section">
          <div className="hero-image">
            <a href="/brand-story">
              <BrandStory src={BrandStoryImage2} alt="Banner backdrop" />
            </a>
          </div>
          <div className="hero-text">
            <TypewriterQuote />
          </div>
        </div>

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
