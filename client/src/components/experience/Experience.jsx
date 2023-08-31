import React from "react";
//import { SiAmazonaws } from "react-icons/si";
//import { GiBambooFountain } from "react-icons/gi";
import ExperienceItem from "./ExperienceItem";
import "./Experience.css";

export const Experience = () => {
  const experienceData = [
    {
      company: "Brigham Young University",
      title: "Information Systems Student",
      date: "2019 - 2023",
      icons: [],
      details: [
        "Completed courses in JavaScript, Node.js, React, AWS - including Lambda functions, Data Structures, AI technology and Machine Learning, Systems Development Life Cycle, Project Management and Agile/Scrum methodologies, Express.js, Python, Django, Java, C++, HTML, CSS, Database Systems, Systems Analysis and Design, UML, Flowcharts, ASP.Net Core, C#, Information Security, Data Communication and Networks.",
        "Maintained a strong technical GPA of 4.0 and an overall GPA of 3.91.",
        "Active memberships in relevant extra-curricular organizations: Association for Information Systems, Cyber Security Student Association, Linux Club, Phi Eta Sigma Honor Society, Golden Key National Honor Society.",
      ],
    },
    {
      company: "Education Services LLC",
      title: "Web Development and Analytics Associate",
      date: "Jun 2021 – Present",
      icons: [],
      details: [
        "Deliver new API based webpages within a Scrum development environment using JavaScript and Node.js",
        "Develop Machine Learning algorithms such as clustering and forecasting, resulting in a 32% increase in website conversion rates and Search Engine Optimization, increasing engagement by 300%",
        "Engineer and deploy scalable scripts to automate tasks, including API integrations, new webpage and content uploads, reducing hands on time spent on these processes by 99.44%",
      ],
    },
    {
      company: "Amazon Web Services (AWS)",
      title: "Solutions Architect Intern",
      date: "May 2022 – Aug 2022",
      icons: [],
      details: [
        "Constructed a responsive QR based MFA webpage using React, JavaScript, and AWS Amplify, resulting in 30% reduction in authentication latency",
        "Engineered and executed a coinciding QR based MFA mobile app using Java, Kotlin, Authenticated API calls, and JSON web tokens, eliminating static credentials on untrusted devices by 100%",
        "Programmed AWS Lambda functions and Amazon API Gateway to orchestrate Web Socket API requests and responses, resulting in a 50% reduction in average response time and a 40% increase in workflow efficiency",
        "Created and launched an AI-powered chatbot through AWS Lambda functions, Amazon Lex, and DynamoDB, driving automated customer service interactions and increasing customer satisfaction by 28%",
        "Championed an award-winning hackathon solution encompassing AWS Lambda functions, RESTful API services, and a React front end, resulting in a boost in global scaling efficiency by 45%",
      ],
    },
    {
      company: "SuperLumin Networks",
      title: "System Administration Intern",
      date: "Jun 2021 – Sep 2021",
      icons: [],
      details: [
        "Implemented service patches and maintenance updates for 20 personally assigned Linux servers, including daily updates and log monitoring, achieving 99.9% uptime rate throughout the internship",
        "Devised and coded scalable task automation scripts in Python, facilitating over 15,000 server efficiency tests and achieving a 60% reduction in testing timelines",
      ],
    },
    {
      company: "Bike Peddler",
      title: "Inventory and Sales Systems Manager",
      date: "May 2015 - Jan 2018, Jan 2020 – Jun 2021",
      icons: [],
      details: [
        "Streamlined accounting and payroll operations by implementing automated SQL queries and VBA macros, resulting in yearly cost savings of more than $30,000",
        "Tailored Tableau visualizations to specific business needs, driving 20% enhancement in inventory turnover",
      ],
    },
    {
      company: "The Church of Jesus Christ of Latter-day Saints",
      title: "Volunteer Representative",
      date: "Jan 2018 – Jan 2020",
      icons: [],
      details: [
        "Conducted training meetings for up to 20 other volunteers focusing on skills such as teaching, service, leadership, and executing meaningful plans to reach monthly and weekly goals",
        "Performed community service on a weekly basis including teaching English to Italians and refugees",
      ],
    },
  ];

  return (
    <section id="experience">
      <h5>Skills gained from</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {experienceData.map((experience, index) => (
          <ExperienceItem
            key={index}
            company={experience.company}
            icons={experience.icons}
            title={experience.title}
            date={experience.date}
            details={experience.details}
          />
        ))}
      </div>
    </section>
  );
};
