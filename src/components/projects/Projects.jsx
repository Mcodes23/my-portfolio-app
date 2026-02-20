// Projects.jsx
import React from "react";
import "./projects.css";
import Landing from "../../assets/landing-page.png";
import Weather from "../../assets/weather.png";
import Portfolio from "../../assets/portfolio.png";

function Projects() {
  const projectData = [
    {
      title: "Weather Data API Client",
      desc: "Application integrating with an external weather API to process and handle real-time data responses with structured error handling.",
      tech: "JavaScript • REST API Integration • Data Handling",
      live: "https://mcodes23.github.io/weather-app/",
      source: "https://github.com/Mcodes23/weather-app.git",
      img: Weather,
    },
    {
      title: "Backend Portfolio API (In Progress)",
      desc: "Designing a RESTful backend service implementing authentication, database schema design, and structured routing architecture.",
      tech: "Node.js • Express • PostgreSQL • JWT",
      live: "#",
      source: "https://github.com/Mcodes23",
      img: Portfolio,
    },
  ];
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>

      <div className="projectsContainer container">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.img} alt={project.title} className="image" />
            <h3 className="title">{project.title}</h3>
            <p className="desc">{project.desc}</p>
            <p className="tech">{project.tech}</p>

            <div className="links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
