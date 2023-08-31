import React from "react";

const ExperienceItem = (props) => {
  const { company, icons, title, date, details } = props;

  return (
    <div>
      <h3>{company}</h3>
      {icons.map((Icon, index) => (
        <Icon key={index} className="experience__icon" />
      ))}
      <h4>{title}</h4>
      <h4>
        <small className="text-light">{date}</small>
      </h4>
      <div className="experience__content">
        {details.map((detail, index) => (
          <article key={index} className="experience__details">
            <h5>{detail}</h5>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
