import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fixAboutPage,
  clearPortfolioPage,
  clearArkanoidPage,
  clearContactPage,
  clearHomePage,
} from "./component/utils";
import AnimationAboutCenter from "./component/animationAboutCenter";

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
        <div className="aboutMe">
          <h2 className="title-AboutMe">About Me</h2>
          <p className="content-AboutMe">
            Based in Berlin, I have an interest in animations and creating
            intuitive and dynamic user experiences. I am looking at the whole
            frontend spectrum but would also like to develop on the backend
            side.
          </p>
        </div>
        <div className="anim-About-Center">
          <AnimationAboutCenter />
        </div>
        <div className="mySkills">
          <h2 className="sklills-Tit">Skills</h2>
          <ul className="skills-Front">
            <li>
              Front-End
              <ul className="skills-Ul">
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </li>
          </ul>
          <ul className="skills-Back">
            <li>
              Back-End
              <ul className="skills-Ul">
                <li>Node.js</li>
                <li>SQL</li>
                <li>MySQL</li>
              </ul>
            </li>
          </ul>
          <ul className="skills-Source">
            <li>
              Source Control
              <ul className="skills-Ul">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </li>
          </ul>
          <ul className="skills-3D">
            <li>
              3D Animation
              <ul className="skills-Ul">
                <li>Three.js</li>
                <li>R3F</li>
                <li>Blender</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
