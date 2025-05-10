// src/components/FilterableProjects.jsx
import React, { useState } from "react";
import "./FilterableProjects.css";
import g1 from "../assets/gallery1.jpeg";
import g2 from "../assets/gallery2.jpeg";
import g3 from "../assets/gallery3.jpeg";
import g4 from "../assets/gallery4.jpeg";
import g5 from "../assets/gallery5.jpeg";
import g6 from "../assets/gallery6.jpeg";
import g7 from "../assets/gallery7.jpeg";
import g8 from "../assets/gallery8.jpeg";
import g9 from "../assets/gallery9.jpeg";

export default function FilterableProjects() {
  const categories = [
    "All Projects",
    "Commercial",
    "Residential",
    "Hospitality",
  ];
  const [selected, setSelected] = useState("All Projects");

  const projects = [
    {
      id: 1,
      src: g1,
      title: "Skyline Tower",
      description: "A modern commercial landmark.",
      categories: ["Commercial"],
      link: "/projects/skyline-tower",
    },
    {
      id: 2,
      src: g2,
      title: "Cozy Cottage",
      description: "A serene residential retreat.",
      categories: ["Hospitality"],
      link: "/projects/cozy-cottage",
    },
    {
      id: 3,
      src: g3,
      title: "City Hotel",
      description: "A vibrant hospitality hub.",
      categories: ["Hospitality"],
      link: "/projects/city-hotel",
    },
    {
      id: 4,
      src: g4,
      title: "Office Plaza",
      description: "Contemporary commercial space.",
      categories: ["Residential"],
      link: "/projects/office-plaza",
    },
    {
      id: 5,
      src: g5,
      title: "Urban Loft",
      description: "Stylish residential apartments.",
      categories: ["Residential"],
      link: "/projects/urban-loft",
    },
    {
      id: 6,
      src: g6,
      title: "Resort Villa",
      description: "Luxury hospitality villa.",
      categories: ["Hospitality"],
      link: "/projects/resort-villa",
    },
    {
      id: 7,
      src: g7,
      title: "Shopping Center",
      description: "Large commercial complex.",
      categories: ["Commercial"],
      link: "/projects/shopping-center",
    },
    {
      id: 8,
      src: g8,
      title: "Suburban Home",
      description: "Family residential house.",
      categories: ["Residential"],
      link: "/projects/suburban-home",
    },
    {
      id: 9,
      src: g9,
      title: "Boutique Hotel",
      description: "Charming boutique hospitality.",
      categories: ["Commercial"],
      link: "/projects/boutique-hotel",
    },
  ];

  const filtered =
    selected === "All Projects"
      ? projects
      : projects.filter((p) => p.categories.includes(selected));

  return (
    <div className="filterable-projects">
      <div className="project-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill${selected === cat ? " active" : ""}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-masonry">
        {filtered.map((p) => (
          <div className="project-item" key={p.id}>
            <div className="image-wrapper">
              <button
                className="category-pill"
                onClick={() => setSelected(p.categories[0])}
              >
                {p.categories[0]}
              </button>
              <a href={p.link}>
                <img src={p.src} alt={p.title} />
              </a>
            </div>
            <h3>
              <a href={p.link}>{p.title}</a>
            </h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
