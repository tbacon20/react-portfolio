import React from "react";
import "./Projects.css";

const ProjectItem = ({
  projectName,
  img,
  alt,
  projectDescription,
  icons,
  link,
}) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={img} alt={alt} />
      </div>
      <h3>{projectName}</h3>
      <div className="skills__details">
        {icons.map((Icon, index) => (
          <Icon key={index} className="skills__details-icon" />
        ))}
      </div>
      <p>{projectDescription}</p>
      <div className="portfolio__item-cta">
        <a href={link} className="w-100 btn" target="_blank" rel="noreferrer">
          Check it out!
        </a>
      </div>
    </article>
  );
};

export default ProjectItem;

<article className="portfolio__item"></article>;
