import React, { useEffect, useRef } from "react";
import "./Offerings.css";

import Construction from "../assets/Construction.jpeg";
import FloorPlan from "../assets/FloorPlan.jpeg";
import Residential from "../assets/Residential.jpeg";
import Interior from "../assets/Interior.jpeg";

const offerings = [
  {
    image: FloorPlan,
    title: "Architectural Planning",
    description:
      "Customized floor plans with optimal space utilization and aesthetic structure.",
  },
  {
    image: Residential,
    title: "Residential Development",
    description:
      "Tailored living spaces that reflect your vision and lifestyle.",
  },
  {
    image: Interior,
    title: "Interior Design",
    description:
      "Creating functional and beautiful interiors with modern sensibility.",
  },
  {
    image: Construction,
    title: "Construction Management",
    description:
      "End-to-end project execution, material coordination, and quality construction service.",
  },
];

const Offerings = () => {
  const offeringRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        }),
      { threshold: 0.3 }
    );

    offeringRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      offeringRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="offerings-wrapper">
      <h2 className="offerings-heading">OUR SERVICES</h2>
      {offerings.map((item, index) => (
        <div
          key={index}
          className={`offering-section ${
            index % 2 === 0 ? "normal" : "mirror"
          }`}
          ref={(el) => (offeringRefs.current[index] = el)}
        >
          <div className="offering-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="offering-text">
            <div className="thumbnail">
              <img src={item.image} alt={`${item.title} thumbnail`} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offerings;
