import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  { title: "Project 1", description: "Description of Project 1", link: "#" },
  { title: "Project 2", description: "Description of Project 2", link: "#" },
  { title: "Project 3", description: "Description of Project 3", link: "#" },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
