import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fixHomePage,
  clearPortfolioPage,
  clearAboutPage,
  clearContactPage,
  clearArkanoidPage,
} from "./utils";
import HomeAnimation from "./homeAnimation";
import "./home.css";

const Home = () => {
  const [h, setH] = useState("");
  const [e, setE] = useState("");
  const [l, setL] = useState("");
  const [ll, setLL] = useState("");
  const [o, setO] = useState("");
  const [virgola, setVirgola] = useState("");
  const [i, setI] = useState("");
  const [apostrofo, setApostrofo] = useState("");
  const [m, setM] = useState("");
  const [a, setA] = useState("");
  const [al, setAl] = useState("");
  const [ale, setAle] = useState("");
  const [ales, setAles] = useState("");
  const [aless, setAless] = useState("");
  const [alessa, setAlessa] = useState("");
  const [alessan, setAlessan] = useState("");
  const [alessand, setAlessand] = useState("");
  const [alessandr, setAlessandr] = useState("");
  const [alessandro, setAlessandro] = useState("");
  const [alessandrom, setAlessandroM] = useState("");
  const [mo, setMo] = useState("");
  const [mor, setMor] = useState("");
  const [more, setMore] = useState("");
  const [moret, setMoret] = useState("");
  const [morett, setMorett] = useState("");
  const [moretti, setMoretti] = useState("");
  const [point, setPoint] = useState("");
  const [si, setSi] = useState("");
  const [sapostrofo, setSapostrofo] = useState("");
  const [sm, setSm] = useState("");
  const [aarticolo, setAarticolo] = useState("");
  const [j, setJ] = useState("");
  const [ju, setJu] = useState("");
  const [jun, setJun] = useState("");
  const [juni, setJuni] = useState("");
  const [junio, setJunio] = useState("");
  const [junior, setJunior] = useState("");
  const [juniors, setJuniorS] = useState("");
  const [so, setSo] = useState("");
  const [sof, setSof] = useState("");
  const [soft, setSoft] = useState("");
  const [softw, setSoftw] = useState("");
  const [softwa, setSoftwa] = useState("");
  const [softwar, setSoftwar] = useState("");
  const [software, setSoftware] = useState("");
  const [softwared, setSoftwareD] = useState("");
  const [de, setDe] = useState("");
  const [dev, setDev] = useState("");
  const [deve, setDeve] = useState("");
  const [devel, setDevel] = useState("");
  const [develo, setDevelo] = useState("");
  const [develop, setDevelop] = useState("");
  const [develope, setDevelope] = useState("");
  const [developer, setDeveloper] = useState("");
  const [spoint, setSpoint] = useState("");

  const [projects, setProjects] = useState("");

  useEffect(() => {
    clearPortfolioPage();
    clearContactPage();
    clearAboutPage();
    clearArkanoidPage();
    fixHomePage();
    document.body.style.overflow = "hidden";
  }, []);

  const timeOut = () => {
    setTimeout(() => {
      setH("H");
    }, 100);

    setTimeout(() => {
      setE("e");
    }, 200);

    setTimeout(() => {
      setL("l");
    }, 300);

    setTimeout(() => {
      setLL("l");
    }, 400);

    setTimeout(() => {
      setO("o");
    }, 500);

    setTimeout(() => {
      setVirgola(", ");
    }, 600);

    setTimeout(() => {
      setI("I");
    }, 700);

    setTimeout(() => {
      setApostrofo("'");
    }, 800);

    setTimeout(() => {
      setM("m ");
    }, 900);

    setTimeout(() => {
      setA("A");
    }, 1000);

    setTimeout(() => {
      setAl("l");
    }, 2100);

    setTimeout(() => {
      setAle("e");
    }, 1100);

    setTimeout(() => {
      setAles("s");
    }, 1200);

    setTimeout(() => {
      setAless("s");
    }, 1300);

    setTimeout(() => {
      setAlessa("a");
    }, 1400);

    setTimeout(() => {
      setAlessan("n");
    }, 1500);

    setTimeout(() => {
      setAlessand("d");
    }, 1600);

    setTimeout(() => {
      setAlessandr("r");
    }, 1700);

    setTimeout(() => {
      setAlessandro("o");
    }, 1800);

    setTimeout(() => {
      setAlessandroM(" M");
    }, 1900);

    setTimeout(() => {
      setMo("o");
    }, 2000);

    setTimeout(() => {
      setMor("r");
    }, 2100);

    setTimeout(() => {
      setMore("e");
    }, 2200);

    setTimeout(() => {
      setMoret("t");
    }, 2300);

    setTimeout(() => {
      setMorett("t");
    }, 2400);

    setTimeout(() => {
      setMoretti("i");
    }, 2500);

    setTimeout(() => {
      setPoint(".");
    }, 2600);

    setTimeout(() => {
      setSi("I");
    }, 2700);

    setTimeout(() => {
      setSapostrofo("'");
    }, 2800);

    setTimeout(() => {
      setSm("m ");
    }, 2900);

    setTimeout(() => {
      setAarticolo("a ");
    }, 3000);

    setTimeout(() => {
      setJ("J");
    }, 3100);

    setTimeout(() => {
      setJu("u");
    }, 3200);

    setTimeout(() => {
      setJun("n");
    }, 3300);

    setTimeout(() => {
      setJuni("i");
    }, 3400);

    setTimeout(() => {
      setJunio("o");
    }, 3500);

    setTimeout(() => {
      setJunior("r ");
    }, 3600);

    setTimeout(() => {
      setJuniorS("S");
    }, 3700);

    setTimeout(() => {
      setSo("o");
    }, 3800);

    setTimeout(() => {
      setSof("f");
    }, 3900);

    setTimeout(() => {
      setSoft("t");
    }, 4000);

    setTimeout(() => {
      setSoftw("w");
    }, 4100);

    setTimeout(() => {
      setSoftwa("a");
    }, 4200);

    setTimeout(() => {
      setSoftwar("r");
    }, 4300);

    setTimeout(() => {
      setSoftware("e ");
    }, 4400);

    setTimeout(() => {
      setSoftwareD("D");
    }, 4500);

    setTimeout(() => {
      setDe("e");
    }, 4600);

    setTimeout(() => {
      setDev("v");
    }, 4700);

    setTimeout(() => {
      setDeve("e");
    }, 4800);

    setTimeout(() => {
      setDevel("l");
    }, 4900);

    setTimeout(() => {
      setDevelo("o");
    }, 5000);

    setTimeout(() => {
      setDevelop("p");
    }, 5100);

    setTimeout(() => {
      setDevelope("e");
    }, 5200);

    setTimeout(() => {
      setDeveloper("r");
    }, 5300);

    setTimeout(() => {
      setSpoint(".");
    }, 5400);

    setTimeout(() => {
      setProjects(
        React.createElement(
          "div",
          { className: "projects-Home" },
          "View my projects"
        )
      );
    }, 5900);
  };

  timeOut();

  return (
    <>
      <div className="div-container-Home">
        <div className="canvas-Home">
          <HomeAnimation />
        </div>

        <nav className="nav-Home">
          <ul className="ul-Home">
            <li className="out-Home">
              <img
                src="./img/icons/navbar.svg"
                alt="navBar"
                width="50vh"
                height="50vh"
                className="img-Home"
              />
              <div className="inhouse-Home">
                <Link className="a" to="/portfolio">
                  PORTFOLIO
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

        <div className="main-Home">
          <div className="header-Home">
            <h2>
              {h}
              {e}
              {l}
              {ll}
              {o}
              {virgola}
              {i}
              {apostrofo}
              {m}
              <span className="highlight-Home">
                {a}
                {al}
                {ale}
                {ales}
                {aless}
                {alessa}
                {alessan}
                {alessand}
                {alessandr}
                {alessandro}
                {alessandrom}
                {mo}
                {mor}
                {more}
                {moret}
                {morett}
                {moretti}
              </span>
              {point} <br />
              {si}
              {sapostrofo}
              {sm}
              {aarticolo}
              {j}
              {ju}
              {jun}
              {juni}
              {junio}
              {junior}
              {juniors}
              {so}
              {sof}
              {soft}
              {softw}
              {softwa}
              {softwar}
              {software}
              {softwared}
              {de}
              {dev}
              {deve}
              {devel}
              {develo}
              {develop}
              {develope}
              {developer}
              {spoint}
            </h2>
            <a href="/portfolio">{projects}</a>
          </div>
        </div>
        <div className="footer-Home">
          <a href="https://www.linkedin.com/in/alessandro-moretti-50aa851ab/">
            <img
              src="././img/icons/linkedin.svg"
              alt="LinkedIn"
              width="30ch"
              height="25ch"
            />
          </a>
          <a href="mailto:moretti@gianmarialessandro.com">
            <img
              src="././img/icons/emailicon.png"
              alt="email"
              width="30ch"
              height="25ch"
            />
          </a>
          <a href="https://github.com/gianmarialessandro/">
            <img
              src="././img/icons/github.svg"
              alt="gitHub"
              width="55ch"
              height="25ch"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;