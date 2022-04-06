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
    }, 300);

    setTimeout(() => {
      setL("l");
    }, 500);

    setTimeout(() => {
      setLL("l");
    }, 700);

    setTimeout(() => {
      setO("o");
    }, 900);

    setTimeout(() => {
      setVirgola(", ");
    }, 1100);

    setTimeout(() => {
      setI("I");
    }, 1300);

    setTimeout(() => {
      setApostrofo("'");
    }, 1500);

    setTimeout(() => {
      setM("m ");
    }, 1700);

    setTimeout(() => {
      setA("A");
    }, 1900);

    setTimeout(() => {
      setAl("l");
    }, 2100);

    setTimeout(() => {
      setAle("e");
    }, 2300);

    setTimeout(() => {
      setAles("s");
    }, 2500);

    setTimeout(() => {
      setAless("s");
    }, 2700);

    setTimeout(() => {
      setAlessa("a");
    }, 2900);

    setTimeout(() => {
      setAlessan("n");
    }, 3100);

    setTimeout(() => {
      setAlessand("d");
    }, 3300);

    setTimeout(() => {
      setAlessandr("r");
    }, 3500);

    setTimeout(() => {
      setAlessandro("o");
    }, 3700);

    setTimeout(() => {
      setAlessandroM(" M");
    }, 3900);

    setTimeout(() => {
      setMo("o");
    }, 4100);

    setTimeout(() => {
      setMor("r");
    }, 4300);

    setTimeout(() => {
      setMore("e");
    }, 4500);

    setTimeout(() => {
      setMoret("t");
    }, 4700);

    setTimeout(() => {
      setMorett("t");
    }, 4900);

    setTimeout(() => {
      setMoretti("i");
    }, 5100);

    setTimeout(() => {
      setPoint(".");
    }, 5300);

    setTimeout(() => {
      setSi("I");
    }, 5500);

    setTimeout(() => {
      setSapostrofo("'");
    }, 5700);

    setTimeout(() => {
      setSm("m ");
    }, 5900);

    setTimeout(() => {
      setAarticolo("a ");
    }, 6100);

    setTimeout(() => {
      setJ("J");
    }, 6300);

    setTimeout(() => {
      setJu("u");
    }, 6500);

    setTimeout(() => {
      setJun("n");
    }, 6700);

    setTimeout(() => {
      setJuni("i");
    }, 6900);

    setTimeout(() => {
      setJunio("o");
    }, 7100);

    setTimeout(() => {
      setJunior("r ");
    }, 7300);

    setTimeout(() => {
      setJuniorS("S");
    }, 7500);

    setTimeout(() => {
      setSo("o");
    }, 7700);

    setTimeout(() => {
      setSof("f");
    }, 7900);

    setTimeout(() => {
      setSoft("t");
    }, 8100);

    setTimeout(() => {
      setSoftw("w");
    }, 8300);

    setTimeout(() => {
      setSoftwa("a");
    }, 8500);

    setTimeout(() => {
      setSoftwar("r");
    }, 8700);

    setTimeout(() => {
      setSoftware("e ");
    }, 8900);

    setTimeout(() => {
      setSoftwareD("D");
    }, 9100);

    setTimeout(() => {
      setDe("e");
    }, 9300);

    setTimeout(() => {
      setDev("v");
    }, 9500);

    setTimeout(() => {
      setDeve("e");
    }, 9700);

    setTimeout(() => {
      setDevel("l");
    }, 9900);

    setTimeout(() => {
      setDevelo("o");
    }, 10100);

    setTimeout(() => {
      setDevelop("p");
    }, 10300);

    setTimeout(() => {
      setDevelope("e");
    }, 10500);

    setTimeout(() => {
      setDeveloper("r");
    }, 10700);

    setTimeout(() => {
      setSpoint(".");
    }, 10900);

    setTimeout(() => {
      setProjects(
        React.createElement(
          "div",
          { className: "projects-Home" },
          "View my projects"
        )
      );
    }, 11100);
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