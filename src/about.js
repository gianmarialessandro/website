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
    // document.body.style.overflow = "hidden";

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
      <div className="canvas-About">
        <AboutAnimation/>
      </div>

    </div>
  );
};

export default About;
