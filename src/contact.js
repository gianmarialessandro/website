import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fixContactPage,
  clearPortfolioPage,
  clearAboutPage,
  clearHomePage,
  clearArkanoidPage,
} from "./utils";

import "./contact.css";

const Contact = () => {
  useEffect(() => {
    clearPortfolioPage();
    clearHomePage();
    clearAboutPage();
    clearArkanoidPage();
    fixContactPage();
    document.body.style.overflow = "visble";
  }, []);

  return (
    <div className="gradient-C">
      <nav className="nav-Contact">
          <ul className="ul-Contact">
            <li className="out-Contact">
              <img
                src="./img/icons/navbar.svg"
                alt="navBar"
                width="50vh"
                height="50vh"
                className="img-Contact"
              />
              <div className="inhouse-Contact">
                <Link className="a" to="/">
                  HOME
                </Link>
                <Link className="a" to="/portfolio">
                  PORTFOLIO
                </Link>
                <Link className="a" to="/about">
                  ABOUT
                </Link>
                <Link className="a" to="/arkanoid">
                  GAME
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      <div className="container-Contacts">
      <div className="firstLine">
      <h1 >let's stay in touch</h1>
      </div>
      <div className="cantact-flex">
        <div className="linkedin-flex">
          <a href="https://www.linkedin.com/in/alessandro-moretti-50aa851ab/">
            <h3 className="contact-title">LinkedIn</h3>
          </a>
          <a href="https://www.linkedin.com/in/alessandro-moretti-50aa851ab/">
            <img
              src="././img/icons/linkedin.svg"
              alt="LinkedIn"
              width="30ch"
              height="25ch"
              className="contact-icon"
            />
          </a>
        </div>
        <div className="email-flex">
          <a href="mailto:moretti@gianmarialessandro.com">
            <h3 className="contact-title emailC">Email</h3>
          </a>
          <h3>moretti@gianmarialessandro.com</h3>
          <a href="mailto:moretti@gianmarialessandro.com">
            <img
              src="././img/icons/emailicon.png"
              alt="email"
              width="30ch"
              height="25ch"
              className="contact-icon"
            />
          </a>
        </div>
        <div className="github-flex">
          <a href="https://github.com/gianmarialessandro/">
            <h3 className="contact-title">GitHub</h3>
          </a>
          <h3>github.com/gianmarialessandro</h3>
          <a href="https://github.com/gianmarialessandro/">
            <img
              src="././img/icons/github.svg"
              alt="gitHub"
              width="35ch"
              height="25ch"
              className="contact-icon"
            />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
