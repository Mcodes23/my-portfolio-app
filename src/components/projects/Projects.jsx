// Projects.jsx
import React from "react";
import "./projects.css";
import Landing from "../../assets/landing-page.png";
import Weather from "../../assets/weather.png";
import Portfolio from "../../assets/portfolio.png";

function Projects() {
  const projectData = [
    {
      title: "Responsive Landing Page",
      desc: "A modern clipboard landing page built with semantic HTML and modern CSS.",
      tech: "HTML • CSS",
      live: "https://mcodes23.github.io/html-css-js-projects/clipboard-landing-page/",
      source:
        "https://github.com/Mcodes23/html-css-js-projects/tree/main/clipboard-landing-page",
      img: Landing,
    },
    {
      title: "Weather App",
      desc: "Fetches real-time weather data from an API and displays UI based on location.",
      tech: "JavaScript • OpenWeather API",
      live: " https://mcodes23.github.io/weather-app/",
      source: "https://github.com/Mcodes23/weather-app.git",
      img: Weather,
    },
    {
      title: "Portfolio Website",
      desc: "Fully responsive personal portfolio built with React and custom CSS.",
      tech: "React • CSS",
      live: "https://my-portfolio-app-vzb1.vercel.app/",
      source: "https://github.com/Mcodes23/my-portfolio-app.git",
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
