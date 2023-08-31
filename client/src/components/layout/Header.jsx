import React from "react";
//import { Link } from "react-router-dom";
import CTA from "./CTA";
import Me from "../../assets/img/Headshot.jpg";
import HeaderSocials from "./HeaderSocials";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Tanner Bacon</h1>
          <h5 className="text-light">Software Engineer</h5>
          <CTA />
          <HeaderSocials />

          <div className="headshot">
            <div className="img-headshot">
              <img src={Me} alt="Tanner Bacon"></img>
            </div>
          </div>

          <a href="#skills" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};
