import React from "react";
import "./Projects.css";
import IMG1 from "../../assets/img/portfolio1.jpg";
import IMG2 from "../../assets/img/portfolio2.jpg";
import IMG4 from "../../assets/img/portfolio4.jpg";
import IMG3 from "../../assets/img/portfolio3.jpg";
import IMG5 from "../../assets/img/portfolio5.jpg";
import {
  SiPython,
  SiJavascript,
  SiCsharp,
  SiJava,
  SiCplusplus,
  SiDjango,
  SiReact,
  SiNodedotjs,
  SiTableau,
  SiMicrosoftazure,
  SiGooglecloud,
  SiMysql,
  SiPostgresql,
  SiDotnet,
  SiAmazonaws,
  SiFastapi,
  SiVuedotjs,
  SiMongodb,
  SiExpress,
  SiAngularjs,
  SiAndroidstudio,
  SiAwsamplify,
  SiApache,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
import ProjectItem from "./ProjectItem";

export const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <ProjectItem
          projectName="QR MFA Mobile App"
          link="https://github.com/tbacon20"
          img={IMG1}
          alt="QR MFA Mobile App"
          projectDescription="This mobile app allows a user to sign in to a website using a QR code. The user can then scan the QR code with the mobile app and sign in to the website."
          icons={[SiJava, SiAndroidstudio, SiAwsamplify, SiAmazonaws]}
        />
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>QR MFA Mobile App</h3>
          <div className="skills__details">
            <SiJava className="skills__details-icon big" />
            <SiAndroidstudio className="skills__details-icon" />
            <SiAwsamplify className="skills__details-icon" />
            <SiAmazonaws className="skills__details-icon" />
          </div>
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Amazon Lex Chatbot</h3>
          <SiPython className="skills__details-icon" />
          <SiAmazonaws className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>QR MFA Website</h3>
          <SiReact className="skills__details-icon" />
          <SiAwsamplify className="skills__details-icon" />
          <SiApache className="skills__details-icon" />
          <SiAmazonaws className="skills__details-icon" />
          <SiJavascript className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Photos With Ann</h3>
          <SiReact className="skills__details-icon" />
          <SiJavascript className="skills__details-icon" />
          <SiNodedotjs className="skills__details-icon" />
          <SiGooglecloud className="skills__details-icon" />
          <TbApi className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Insurance Price Estimator</h3>
          <FaBrain className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Happy Kidney Health App</h3>
          <SiPython className="skills__details-icon" />
          <SiDjango className="skills__details-icon" />
          <SiPostgresql className="skills__details-icon" />
          <SiMicrosoftazure className="skills__details-icon" />
          <FaBrain className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>NFT Blockchain Cryptocurrency</h3>
          <SiCsharp className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Fag-el Gamous Egypt Project</h3>
          <SiReact className="skills__details-icon" />
          <SiDotnet className="skills__details-icon" />
          <SiCsharp className="skills__details-icon" />
          <SiMysql className="skills__details-icon" />
          <SiAmazonaws className="skills__details-icon" />
          <FaBrain className="skills__details-icon" />
          <SiFastapi className="skills__details-icon" />
          <TbApi className="skills__details-icon" />

          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Concert Trip Planner</h3>
          <TbApi className="skills__details-icon" />
          <SiReact className="skills__details-icon" />
          <SiJavascript className="skills__details-icon" />
          <SiNodedotjs className="skills__details-icon" />
          <SiGooglecloud className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>The Bacon Bookstore</h3>
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>React Portfolio Webpage</h3>
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Python Wordle Project</h3>
          <p>
            This Python project allows users to play the famous New York Times
            wordle game!
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20/wordle"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20/wordle"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>GoLang Random Team Generator</h3>
          <p>
            This GoLang project reads a csv of student names and generates
            random teams!
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20/GoTeamGenerator"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20/GoTeamGenerator"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Java RoboCode Bot</h3>
          <p>
            In this epic Java project, I created robots to battle to the death
            with other killer robots!
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20/Robocode"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20/Robocode"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Java Random Team Generator</h3>
          <p>
            This project reads a csv of student names and generates random
            teams!
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20/JavaTeamGenerator"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20/JavaTeamGenerator"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Payroll Web Portal</h3>
          <SiTableau className="skills__details-icon" />
          <SiPython className="skills__details-icon" />
          <SiDjango className="skills__details-icon" />
          <SiPostgresql className="skills__details-icon" />
          <p>
            This full stack project makes it easy for teachers to pay their
            teaching and research assistants!
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/audreyjy/EmployeeDashboardProject"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/audreyjy/EmployeeDashboardProject"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Museum of Ordinary Objects</h3>
          <SiVuedotjs className="skills__details-icon" />
          <SiNodedotjs className="skills__details-icon" />
          <SiMongodb className="skills__details-icon" />
          <SiExpress className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JaneLee8693/BYU-IS-portfolio-demo"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/JaneLee8693/BYU-IS-portfolio-demo"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Photographer Portfolio</h3>
          <SiVuedotjs className="skills__details-icon" />
          <SiJavascript className="skills__details-icon" />
          <SiNodedotjs className="skills__details-icon" />
          <SiAngularjs className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Comic Page</h3>
          <SiVuedotjs className="skills__details-icon" />
          <SiAngularjs className="skills__details-icon" />
          <SiJavascript className="skills__details-icon" />
          <SiNodedotjs className="skills__details-icon" />
          <SiMongodb className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Vector Math Calculator</h3>
          <SiCplusplus className="skills__details-icon" />
          <p>This MERN project was created to help display all of my work!</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tbacon20"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/tbacon20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
