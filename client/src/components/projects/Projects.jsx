import React from "react";
import { useState } from "react";
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
  SiHtml5,
} from "react-icons/si";
import { CiBacon } from "react-icons/ci";
import { TbApi } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
import ProjectItem from "./ProjectItem";

export const Projects = () => {
  const projectData = [
    {
      projectName: "React Portfolio Webpage",
      link: [
        "https://github.com/tbacon20/react-portfolio",
        "https://businesswithbacon.com",
      ],
      img: IMG1,
      alt: "React Portfolio Webpage",
      projectDescription: [
        "The React Portfolio Webpage is designed to showcase a compilation of various projects and skills.",
        "Utilizing the MERN stack, this project emphasizes front-end development and user interface design.",
      ],
      icons: [SiReact, SiJavascript, SiNodedotjs, SiMongodb, SiExpress],
      languages: ["React", "node.js", "JavaScript", "MongoDB"],
    },
    {
      projectName: "QR MFA Mobile App",
      link: ["https://github.com/tbacon20/AmplifyMobileApp"],
      img: IMG1,
      alt: "QR MFA Mobile App",
      projectDescription: [
        "This mobile app allows a user to sign in to a website using a QR code. The user can then scan the QR code with the mobile app and sign in to the website.",
        "This mobile app runs on Java, Kotlin, and AWS Amplify. The mobile app uses AWS Cognito for user authentication and AWS Lambda for serverless functions.",
      ],
      icons: [SiJava, SiAndroidstudio, SiAwsamplify, SiAmazonaws],
      languages: ["Java", "AWS"],
    },
    {
      projectName: "QR MFA Website",
      link: ["https://github.com/tbacon20/SecureApp"],
      img: IMG1,
      alt: "",
      projectDescription: [
        "This QR-based Multi-Factor Authentication (MFA) webpage works with the mobile app to provide an MFA method that voids the need for static credentials on untrusted devices. ",
        "This website runs on React, JavaScript, and AWS Amplify. The website uses AWS Cognito for user authentication, Amazon API Gateway for API requests, and AWS Lambda for serverless functions.",
      ],
      icons: [
        SiReact,
        SiNodedotjs,
        SiAwsamplify,
        SiApache,
        SiAmazonaws,
        SiJavascript,
      ],
      languages: ["React", "AWS", "Node.js", "Javascript"],
    },
    {
      projectName: "Fag-el Gamous Egypt Project",
      link: ["https://github.com/tbacon20/Intex-2-3"],
      img: IMG1,
      alt: "Fag-el Gamous Egypt Project",
      projectDescription: [
        "The Fag-el Gamous Egypt Project is a comprehensive MERN application showcasing a diverse range of technologies and skills.",
        "This project integrates technologies such as React, .NET, C#, MySQL, Amazon AWS, FastAPI, and more, to create a powerful and feature-rich application.",
        "The application was designed to demonstrate various skills, including front-end development, back-end development, database management, cloud computing, and API integration.",
      ],
      icons: [
        SiReact,
        SiDotnet,
        SiCsharp,
        SiMysql,
        SiAmazonaws,
        FaBrain,
        TbApi,
      ],
      languages: ["React", "ML", ".NET", "C#", "Azure", "MySQL", "AWS"],
    },
    {
      projectName: "Happy Kidney Health App",
      link: ["https://github.com/tbacon20/intex-fa22"],
      img: IMG1,
      alt: "Happy Kidney Health App",
      projectDescription: [
        "The Happy Kidney Health App is a Python Django full-stack web application focused on providing personalized dietary recommendations to individuals with kidney health concerns.",
        "The app leverages machine learning forecasting to predict proper diets based on the user's kidney failure stage and comorbidities, offering valuable insights for maintaining a healthy lifestyle.",
      ],
      icons: [SiPython, SiDjango, SiPostgresql, SiMicrosoftazure, FaBrain],
      languages: ["Python", "Django", "PostgreSQL", "Azure", "ML"],
    },
    {
      projectName: "Golden Eclipse Jewelry Website",
      link: [
        "https://github.com/tbacon20/intex-fa22",
        "https://goldeneclipse-vue.businesswithbacon.com/",
      ],
      img: IMG1,
      alt: "Golden Eclipse Jewelry Website",
      projectDescription: [
        "The golden eclipse jewelry website is a full-stack web application used by a local jewelry business to showcase their products and services.",
        "The app displays a variety of jewelry products and allows users to add products to their cart.",
      ],
      icons: [SiVuedotjs, SiNodedotjs, SiMongodb, SiExpress],
      languages: ["Vue.js", "Node.js", "MongoDB"],
    },
    {
      projectName: "NFT Blockchain Cryptocurrency",
      link: null,
      img: IMG1,
      alt: "NFT Blockchain Cryptocurrency",
      projectDescription: [
        "The NFT Blockchain Cryptocurrency project showcases a full-stack application developed using .NET and C# to create a unique blockchain-based cryptocurrency.",
        "This MERN project aims to explore the world of non-fungible tokens (NFTs) and blockchain technology, utilizing the power of .NET and C# to implement a secure and decentralized cryptocurrency solution.",
        "The project demonstrates the creation, validation, and management of blockchain transactions, providing insight into the inner workings of cryptocurrency systems.",
      ],
      icons: [SiDotnet, SiCsharp, SiJavascript, SiMysql, SiHtml5],
      languages: [".NET", "C#", "Javascript", "MySQL"],
    },
    {
      projectName: "Amazon Lex Chatbot",
      link: null,
      img: IMG1,
      alt: "Amazon Lex Chatbot",
      projectDescription: [
        "The Amazon Lex chatbot is a conversational AI service that can be used to automate customer conversations. ",
        "The chat bot uses natural language processing and a series of AWS Lambda functions to respond to user input.",
      ],
      icons: [SiAmazonaws, SiPython],
      languages: ["AWS", "Python"],
    },
    {
      projectName: "Insurance Price Estimator",
      link: null,
      img: IMG1,
      alt: "Insurance Price Estimator",
      projectDescription: [
        "This project showcases the application of machine learning in the domain of insurance and features a user-friendly interface where users can input their information to receive an estimated insurance price.",
        "FastAPI was used to set up the backend API that interacts with the machine learning models, ensuring quick and efficient responses.",
      ],
      icons: [FaBrain, SiPostgresql, SiPython, SiFastapi, TbApi],
      languages: ["ML", "Python", "PostgreSQL"],
    },
    {
      projectName: "Power Lifting SageMaker Prediction Project",
      link: null,
      img: IMG1,
      alt: "Power Lifting SageMaker Prediction Project",
      projectDescription: [
        "This project showcases the application of machine learning in the domain of weight lifting.",
        "This project used Amazon API Gateway, AWS Lambda Functions, and Amazon SageMaker to set up the backend API that interacts with the machine learning models, then returning predicted outcomes.",
      ],
      icons: [FaBrain, SiPostgresql, SiPython, SiAmazonaws, TbApi],
      languages: ["ML", "Python", "PostgreSQL"],
    },
    {
      projectName: "Photos With Ann",
      link: ["https://github.com/tbacon20/PhotosWithAnn"],
      img: IMG1,
      alt: "Photos With Ann",
      projectDescription: [
        "Photos With Ann is a full-stack photography website built using the MERN (MongoDB, Express, React, Node.js) stack.",
        "The website offers a user-friendly interface for viewing and sharing photographs, powered by React components and dynamic data fetched from the MongoDB database.",
        "It leverages the power of server-side rendering and real-time updates to deliver a seamless browsing experience.",
      ],
      icons: [SiReact, SiJavascript, SiNodedotjs, SiGooglecloud, TbApi],
      languages: ["React", "Node.js", "JavaScript", "MongoDB", "Google Cloud"],
    },
    {
      projectName: "Concert Trip Planner",
      link: null,
      img: IMG1,
      alt: "Concert Trip Planner",
      projectDescription: [
        "The Concert Trip Planner is a comprehensive MERN application designed to assist users in planning their concert trips.",
        "Utilizing a tech stack that includes React, JavaScript, Node.js, and Google Cloud, this project aims to streamline the process of organizing concert-related information.",
      ],
      icons: [TbApi, SiReact, SiJavascript, SiNodedotjs, SiGooglecloud],
      languages: ["React", "Node.js", "JavaScript", "Google Cloud", "AWS"],
    },
    {
      projectName: "The Bacon Bookstore",
      link: ["https://github.com/tbacon20/Bacon-Bookstore"],
      img: IMG1,
      alt: "The Bacon Bookstore",
      projectDescription: [
        "The Bacon Bookstore is a MERN project created to showcase a variety of skills and technologies.",
        "This project serves as a demonstration of front-end and back-end development techniques using the MERN stack.",
      ],
      icons: [SiDotnet, SiCsharp, SiHtml5, SiMysql, SiJavascript],
      languages: [
        ".NET",
        "C#",
        "Node.js",
        "JavaScript",
        "MySQL",
        "AWS",
        "Azure",
      ],
    },
    {
      projectName: "Python Wordle Project",
      link: ["https://github.com/tbacon20/wordle"],
      img: IMG3,
      alt: "Python Wordle Project",
      projectDescription: [
        "The Python Wordle Project is a Python-based game that allows users to play the popular New York Times Wordle game.",
        "This project focuses on providing an interactive and enjoyable word game experience.",
      ],
      icons: [SiPython, SiDjango, SiPostgresql],
      languages: ["Python", "Django", "PostgreSQL"],
    },
    {
      projectName: "GoLang Random Team Generator",
      link: ["https://github.com/tbacon20/GoTeamGenerator"],
      img: IMG2,
      alt: "GoLang Random Team Generator",
      projectDescription: [
        "The GoLang Random Team Generator project is a GoLang-based application that generates random teams from a CSV list of student names.",
        "This project showcases GoLang programming and CSV parsing capabilities.",
      ],
      icons: [],
      languages: [],
    },
    {
      projectName: "Java RoboCode Bot",
      link: ["https://github.com/tbacon20/Robocode"],
      img: IMG4,
      alt: "Java RoboCode Bot",
      projectDescription: [
        "The Java RoboCode Bot project is an exciting Java-based project where you create and program robots to battle against other robots.",
        "This project explores Java programming and simulation concepts.",
      ],
      icons: [SiJava],
      languages: ["Java"],
    },
    {
      projectName: "Java Random Team Generator",
      link: ["https://github.com/tbacon20/JavaTeamGenerator"],
      img: IMG2,
      alt: "Java Random Team Generator",
      projectDescription: [
        "The Java Random Team Generator project generates random teams from a CSV list of student names.",
        "This project emphasizes Java programming and CSV parsing capabilities.",
      ],
      icons: [SiJava],
      languages: ["Java"],
    },
    {
      projectName: "Payroll Web Portal",
      link: ["https://github.com/audreyjy/EmployeeDashboardProject"],
      img: IMG5,
      alt: "Payroll Web Portal",
      projectDescription: [
        "The Payroll Web Portal is a full-stack project designed to simplify the payment process for teachers' assistants.",
        "This project showcases full-stack development skills using Django, PostgreSQL, and Tableau.",
      ],
      icons: [SiTableau, SiPython, SiDjango, SiPostgresql],
      languages: ["Python", "Django", "PostgreSQL"],
    },
    {
      projectName: "Museum of Ordinary Objects",
      link: ["https://github.com/JaneLee8693/BYU-IS-portfolio-demo"],
      img: IMG1,
      alt: "Museum of Ordinary Objects",
      projectDescription: [
        "The Museum of Ordinary Objects is a MERN project that demonstrates a variety of skills and technologies.",
        "This project serves as a showcase for front-end and back-end development using the MERN stack.",
      ],
      icons: [SiVuedotjs, SiNodedotjs, SiMongodb, SiExpress],
      languages: ["Vue.js", "Node.js", "MongoDB", "Express"],
    },
    {
      projectName: "Photographer Portfolio",
      link: ["https://github.com/tbacon20/PhotographyPortfolio"],
      img: IMG1,
      alt: "Photographer Portfolio",
      projectDescription: [
        "The Photographer Portfolio project showcases a MERN-based portfolio for a photographer.",
        "This project highlights skills in Vue.js, JavaScript, Node.js, and AngularJS.",
      ],
      icons: [SiVuedotjs, SiJavascript, SiNodedotjs, SiAngularjs],
      languages: ["Vue.js", "Node.js", "JavaScript", "MongoDB"],
    },
    {
      projectName: "Comic Page",
      link: [
        "https://github.com/tbacon20/VueCartoonBrowser",
        "http://lab3.businesswithbacon.com/",
      ],
      img: IMG1,
      alt: "Comic Page",
      projectDescription: [
        "The Comic Page project is a MERN project created to display comic pages.",
        "This project showcases front-end and back-end development skills using the MERN stack.",
      ],
      icons: [SiVuedotjs, SiAngularjs, SiJavascript, SiNodedotjs, SiMongodb],
      languages: ["Vue.js", "Node.js", "JavaScript", "MongoDB"],
    },
    {
      projectName: "Vector Math Calculator",
      link: null,
      img: IMG1,
      alt: "Vector Math Calculator",
      projectDescription: [
        "The Vector Math Calculator is a project that focuses on mathematical computations related to vectors.",
        "Utilizing the C++ programming language, this calculator provides functionality for vector addition, subtraction, dot product, cross product, and more.",
      ],
      icons: [SiCplusplus],
      languages: ["C++"],
    },
  ];

  const languages = [
    { language: null, icon: CiBacon },
    { language: "React", icon: SiReact },
    { language: "Node.js", icon: SiNodedotjs },
    { language: "ML", icon: FaBrain },
    { language: "AWS", icon: SiAmazonaws },
    { language: "Google Cloud", icon: SiGooglecloud },
    { language: "Azure", icon: SiMicrosoftazure },
    { language: "Python", icon: SiPython },
    { language: "Django", icon: SiDjango },
    { language: "Java", icon: SiJava },
    { language: "JavaScript", icon: SiJavascript },
    { language: "Vue.js", icon: SiVuedotjs },
    { language: "C#", icon: SiCsharp },
    { language: ".NET", icon: SiDotnet },
    { language: "C++", icon: SiCplusplus },
    { language: "PostgreSQL", icon: SiPostgresql },
    { language: "MySQL", icon: SiMysql },
    { language: "MongoDB", icon: SiMongodb },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const handleFilter = (language) => {
    console.log(language);
    setSelectedLanguage(language);
  };

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="filter-icons">
        <div className="filter-icons-title">
          <h3>Select a language or framework...</h3>
          <h5>
            Currently displaying {!selectedLanguage ? "All" : selectedLanguage}{" "}
            projects
          </h5>
        </div>

        <div className="filter-icons-icons">
          {languages.map((language) => {
            return (
              <span
                onClick={() => handleFilter(language.language)}
                className="language__details-icon"
              >
                {language.icon()}
              </span>
            );
          })}
        </div>
      </div>

      <div className="container portfolio__container">
        {projectData
          .filter((project) => {
            if (selectedLanguage === null) {
              return true;
            }
            return project.languages.includes(selectedLanguage);
          })
          .map((project) => (
            <ProjectItem
              projectName={project.projectName}
              link={project.link}
              img={project.img}
              alt={project.alt}
              projectDescription={project.projectDescription}
              icons={project.icons}
            />
          ))}
      </div>
    </section>
  );
};
