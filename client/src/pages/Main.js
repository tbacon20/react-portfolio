import { Outlet, Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { About } from '../components/about/About';
import { Experience } from '../components/experience/Experience';
import { Skills } from '../components/skills/Skills';
import { Projects } from '../components/projects/Projects';
import { Contact } from '../components/contact/Contact';

export const Main = () => {
  return (
    <>
      <Nav/>
      <Header/>
      {/* <About/> */}
      <Experience/>
      <Projects/>
      <Skills/>
      {/* <Contact/> */}
      <Footer/>
    </>
  )
};
