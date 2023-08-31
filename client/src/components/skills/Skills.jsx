import React from "react";
import { TbLetterR } from "react-icons/tb";
import { FiDatabase } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import { CgInfinity } from "react-icons/cg";
import {
  SiPython,
  SiJavascript,
  SiCsharp,
  SiJava,
  SiCplusplus,
  SiSwift,
  SiDjango,
  SiReact,
  SiNodedotjs,
  SiTableau,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDotnet,
} from "react-icons/si";
import "./Skills.css";

export const Skills = () => {
  return (
    <section id="skills">
      <h5>Take a look at</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__languages">
          <h3>Languages</h3>
          <div className="skills__content">
            <acticle className="skills__details">
              <FiDatabase className="skills__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiPython className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiDotnet className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiJavascript className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiCsharp className="skills__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Moderate</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiJava className="skills__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Moderate</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiCplusplus className="skills__details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Beginner</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <TbLetterR className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiSwift className="skills__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </acticle>
          </div>
        </div>
        <div className="skills__libraries">
          <h3>Libraries, Platforms, and Processes</h3>
          <div className="skills__content">
            <acticle className="skills__details">
              <SiDjango className="skills__details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiReact className="skills__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiNodedotjs className="skills__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiTableau className="skills__details-icon" />
              <div>
                <h4>Tableau</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <FaAws className="skills__details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiMicrosoftazure className="skills__details-icon" />
              <div>
                <h4>Azure</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <SiGooglecloud className="skills__details-icon" />
              <div>
                <h4>GCP</h4>
                <small className="text-light">Proficient</small>
              </div>
            </acticle>
            <acticle className="skills__details">
              <CgInfinity className="skills__details-icon" />
              <div>
                <h4>CI/CD</h4>
                <small className="text-light">Moderate</small>
              </div>
            </acticle>
          </div>
        </div>
      </div>
    </section>
  );
};
