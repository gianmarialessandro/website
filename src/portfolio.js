import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fixPortfolioPage,
  clearPortfolioPage,
  clearAboutPage,
  clearContactPage,
  clearArkanoidPage,
} from "./component/utils";

import "./portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    clearPortfolioPage();
    clearContactPage();
    clearAboutPage();
    clearArkanoidPage();
    fixPortfolioPage();
    document.body.style.overflow = "visible";
  }, []);

  return (
    <div className="portfolio-main">
      <nav className="nav-Port">
        <ul className="ul-Port">
          <li className="out-Port">
            <img
              src="./img/icons/navbar.svg"
              alt="navBar"
              width="40vh"
              height="40vh"
              className="img-Port"
            />
            <div className="inhouse-Port">
              <Link className="a" to="/">
                HOME
              </Link>
              <Link className="a" to="/about">
                ABOUT
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

      <div className="grid-container">
        <article className="project city grid-col-span4">
          <div className="flex">
            <div className="imgAndTitleDiv">
              <img
                src="./img/images/city-map.png"
                alt="city-map"
                width="100ch"
                height="100ch"
              />
            </div>
            <div>
              <a href="https://github.com/gianmarialessandro/City-Map">
                <h2 className="projectTitle">City Map</h2>
              </a>
            </div>
          </div>
          <p>
            Object: The aim of the project was to obtain a three-dimensional
            diagram in form of a city in which each block represent a single
            instance characterised by four metrics, height, width, depth and
            colour
          </p>
          <p>
            Tools: Three.js React-Three-Fiber React JavaScript Node.js CSS HTML
          </p>
          <p>
            Focus: The focus of the project was the development of the algorithm
            for the automatic distribution of instances of various sizes in an
            ordered and compact form (Bin packing problem)
          </p>
          <div className="flexB">
            <div>
              <a href="https://github.com/gianmarialessandro/City-Map">
                <img
                  src="./img/icons/github.svg"
                  alt="github"
                  width="55ch"
                  height="35ch"
                />
              </a>
            </div>
            <div>
              <a href="https://www.versio.io/blog-cmdb-visualize-inventory-data-3d-city-map.html">
                article about the project
              </a>
            </div>
          </div>
        </article>
        <article className="project arkanoidCSS grid-col-span2">
          <div className="flex">
            <div className="imgAndTitleDiv">
              <img
                src="./img/images/arkanoid.png"
                alt="city-map"
                width="100ch"
                height="100ch"
              />
            </div>
            <div>
              <Link className="a" to="/arkanoid">
                <h2 className="projectTitle">Arkanoid Game</h2>
              </Link>
            </div>
          </div>
          <p>
            Object: Project based on the development of an interactive react
            page where the user can enjoy trying out a simple game with
            attractive graphics
          </p>
          <p>Tools: React-Three-Fiber React-Three-Cannon React CSS</p>
          <p>
            Focus: A style exercise to explore react hooks and the possibilities
            offered by Three.js graphics
          </p>
          <div className="flexB">
            <div>
              <a href="https://github.com/gianmarialessandro/arkanoid">
                <img
                  src="./img/icons/github.svg"
                  alt="github"
                  width="55ch"
                  height="35ch"
                />
              </a>
            </div>
          </div>
        </article>
        <article className="project social">
          <div className="flex">
            <div className="imgAndTitleDiv">
              <img
                src="./img/images/network-automation.png"
                alt="social network automation"
                width="100ch"
                height="100ch"
              />
            </div>
            <div>
              <a href="https://github.com/gianmarialessandro/Social-Network-Automation">
                <h2 className="projectTitle">Social Network Automation</h2>
              </a>
            </div>
          </div>
          <p>
            Object: A programme that allows the user of a Linkedin account to
            automatically access and track all their contacts on the platform
          </p>
          <p>Tools: Puppeteer Node.js JavaScript</p>
          <p>
            Focus: Very useful project to understand the functions of automation
            programs. Various aspects have been taken into consideration, from
            the search for elements in the DOM in order to make the program move
            autonomously between one contact page and another, the attention to
            the data to be searched and saved in objects containing the various
            public characteristics of the contacts and above all the development
            of an algorithm that would not stop if it did not find the required
            elements but would continue with the next ones until all the
            required contacts had been read
          </p>
          <div className="flexB">
            <div>
              <a href="https://github.com/gianmarialessandro/Social-Network-Automation">
                <img
                  src="./img/icons/github.svg"
                  alt="github"
                  width="55ch"
                  height="35ch"
                />
              </a>
            </div>
          </div>
        </article>
        <article className="project eol grid-col-span2">
          <div className="flex">
            <div className="imgAndTitleDiv">
              <img
                src="./img/images/eol.png"
                alt="end-of-life"
                width="100ch"
                height="100ch"
              />
            </div>
            <div>
              <a href="https://github.com/gianmarialessandro/End-Of-Life">
                <h2 className="projectTitle">EoL &amp; Product release</h2>
              </a>
            </div>
          </div>
          <p>
            Object: Project to track the end-of-life dates of software and
            hardware as they approach
          </p>
          <p>Tools: Node.js JavaScript</p>
          <p>
            Focus: The main aspect of the programme was the identification of
            important data, their tracking and ordered reproduction in a JSON
            file
          </p>
          <div className="flexB">
            <div>
              <a href="https://github.com/gianmarialessandro/End-Of-Life">
                <img
                  src="./img/icons/github.svg"
                  alt="github"
                  width="55ch"
                  height="35ch"
                />
              </a>
            </div>
            <div>
              <a href="https://www.versio.io/content-end-of-life-product-release-version-database.html">
                article about the project
              </a>
            </div>
          </div>
        </article>
        <article className="project quiz">
          <div className="flex">
            <div className="imgAndTitleDiv">
              <img
                src="./img/images/quiz.png"
                alt="quiz"
                width="100ch"
                height="100ch"
              />
            </div>
            <div>
              <a href="https://github.com/gianmarialessandro/Quiz">
                <h2 className="projectTitle">Quiz</h2>
              </a>
            </div>
          </div>
          <p>Object: small program to create a quiz game</p>
          <p>Tools: JavaScript CSS HTML</p>
          <p>
            Focus: Useful code for learning how to handle interactions with the
            DOM using javaScript
          </p>
          <div className="flexB">
            <div>
              <a href="https://github.com/gianmarialessandro/Quiz">
                <img
                  src="./img/icons/github.svg"
                  alt="github"
                  width="55ch"
                  height="35ch"
                />
              </a>
            </div>
          </div>
        </article>
        <article className="project blog">
          <div className="flex">
            <div className="imgAndTitleDiv">
              <img
                src="./img/images/blog.png"
                alt="blog"
                width="100ch"
                height="100ch"
              />
            </div>
            <div>
              <a href="https://github.com/gianmarialessandro/blogAufgabe">
                <h2 className="projectTitle">Blog</h2>
              </a>
            </div>
          </div>
          <p>Object: small program to create a blog site</p>
          <p>Tools: MySQL PHP CSS HTML</p>
          <p>
            Focus: Useful code to learn how to manage interactions with the
            database
          </p>
          <div className="flexB">
            <div>
              <a href="https://github.com/gianmarialessandro/blogAufgabe">
                <img
                  src="./img/icons/github.svg"
                  alt="github"
                  width="55ch"
                  height="35ch"
                />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;
