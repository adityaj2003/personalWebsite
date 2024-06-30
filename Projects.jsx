// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <div id="foreground">
      <div id="projectsSection">
        <h2 id = "heading">Projects: A growing collection of my projects</h2>
        <div id="tilesContainerProjects">
          <a href="vision" className="tile tile1"></a>
          <a href="chess" className="tile tile2"></a>
          <a href="youtube" className="tile tile3"></a>
          <a href="wordle" className="tile tile4"></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

