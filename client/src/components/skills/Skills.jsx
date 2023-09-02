import React from "react";
import { FiDatabase } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
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
  SiMysql,
} from "react-icons/si";
import "./Skills.css";

export const Skills = () => {
  return (
    <section id="skills">
      <h5>Take a look at</h5>
      <h2>My Skills</h2>

      <div className="skills__container">
        <div className="skills__languages">
          <h3>Languages, Libraries, Platforms, and Processes</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FiDatabase className="skills__details-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiPython className="skills__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiDotnet className="skills__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiJavascript className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiCsharp className="skills__details-icon" />
              <div>
                <h4>C#</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiJava className="skills__details-icon" />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiCplusplus className="skills__details-icon" />
              <div>
                <h4>C++</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiMysql className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiSwift className="skills__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiDjango className="skills__details-icon" />
              <div>
                <h4>Django</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiReact className="skills__details-icon" />
              <div>
                <h4>React.js</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiNodedotjs className="skills__details-icon" />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiTableau className="skills__details-icon" />
              <div>
                <h4>Tableau</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaAws className="skills__details-icon" />
              <div>
                <h4>AWS</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiMicrosoftazure className="skills__details-icon" />
              <div>
                <h4>Azure</h4>
              </div>
            </article>
            <article className="skills__details">
              <SiGooglecloud className="skills__details-icon" />
              <div>
                <h4>GCP</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
