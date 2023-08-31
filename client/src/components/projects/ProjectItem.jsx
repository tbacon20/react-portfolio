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
      <div className="portfolio__item-content">
        <h3>{projectName}</h3>
        <div className="skills__details">
          {icons.map((Icon, index) => (
            <Icon key={index} className="skills__details-icon" />
          ))}
        </div>
        <p>
          {projectDescription.map((Description, index) => (
            <>
              <br />
              <li key={index}>{Description}</li>
            </>
          ))}
        </p>
        <br />
      </div>
      <div className="portfolio__item-cta">
        {link && (
          <>
            {link.length > 1 ? (
              <>
                <a
                  href={link[0]}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={link[1]}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </>
            ) : (
              <a
                href={link[0]}
                className="w-100 btn"
                target="_blank"
                rel="noreferrer"
              >
                Check out the code!
              </a>
            )}
          </>
        )}
        {!link && <i>*no code available</i>}
      </div>
    </article>
  );
};

export default ProjectItem;

<article className="portfolio__item"></article>;
