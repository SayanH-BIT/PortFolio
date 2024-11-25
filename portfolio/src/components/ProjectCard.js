import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} className="btn">View Project</a>
    </div>
  );
};

export default ProjectCard;
