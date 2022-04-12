import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fixAboutPage,
  clearPortfolioPage,
  clearArkanoidPage,
  clearContactPage,
  clearHomePage,
} from "./utils";
import AboutAnimation from "./aboutAnimation";

import "./about.css";

const About = () => {
  useEffect(() => {
    clearPortfolioPage();
    clearContactPage();
    clearArkanoidPage();
    clearHomePage();
    fixAboutPage();
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="div-container-About">
      <nav className="nav-About">
        <ul className="ul-About">
          <li className="out-About">
            <img
              src="./img/icons/navbar.svg"
              alt="navBar"
              width="40vh"
              height="40vh"
              className="img-About"
            />
            <div className="inhouse-About">
              <Link className="a" to="/">
                HOME
              </Link>
              <Link className="a" to="/portfolio">
                PORTFOLIO
              </Link>
              <Link className="a" to="/contact">
                CONTACT
              </Link>
              <Link className="a" to="/arkanoid">
                GAME
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <div className="container-About">
        <article className="aboutMe">
          Based in Berlin, I have an interest in animations and creating
          intuitive and dynamic user experiences. I am looking at the whole
          frontend spectrum but would also like to develop on the backend side.
        </article>
        <div className="canvas-About"><AboutAnimation/></div>
        <article className="mySkills">ciao</article>
      </div>
    </div>
  );
};

export default About;
