import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fixHomePage, clearPortfolioPage, clearAboutPage, clearContactPage, clearArkanoidPage } from "./utils";
import HomeAnimation from "./homeAnimation";
import "./home.css";

const Home = () => {
  const [hi, setHi] = useState("");
  const [iam, setIam] = useState("");
  const [name, setName] = useState("");
  const [point, setPoint] = useState("");
  const [job, setJob] = useState("");
  const [projects, setProjects] = useState("");

  useEffect(() => {
    
    clearPortfolioPage()
    clearContactPage()
    clearAboutPage()
    clearArkanoidPage()
    fixHomePage();
    document.body.style.overflow = "hidden";
  }, []);

  setTimeout(() => {
    setHi("Hello");
  }, 1500);

  setTimeout(() => {
    setIam(", I'm ");
    setName("Alessandro Moretti");
    setPoint(".");
  }, 3000);

  setTimeout(() => {
    setJob("I'm a Junior Software Developer.");
  }, 4500);

  setTimeout(() => {
    setProjects(
      React.createElement("div", { className: "projects" }, "View my projects")
    );
  }, 6000);

  return (
    <>
      <div className="div-container">
        <div className="canvas">
          <HomeAnimation />
        </div>

        <nav>
          <ul>
            <li className="out">
              <img
                src="./img/icons/navbar.svg"
                alt="navBar"
                width="40vh"
                height="40vh"
              />
              <div className="inhouse">
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

        <div className="main">
          <div className="header">
            <h2>
              {hi}
              {iam}
              <span className="highlight">{name}</span>
              {point} <br />
              {job}
            </h2>
            <a href="/portfolio">{projects}</a>
          </div>
        </div>
        <div className="footer">
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

// class Home extends Component {
//   // Body class change
//   componentDidMount() {
//     fixHomePage();
//   }
//   componentWillUnmount() {
//     clearHomePage();
//   }

//   render(props) {
//     return (
//       <div>
//         <AniamtionHome />
//         <nav>
//           <ul>
//             <li className="out">
//               <img
//                 src="./img/icons/navBarIcon.png"
//                 alt="navBar"
//                 width="40vh"
//                 height="40vh"
//               />
//               <div className="inhouse">
//                 <Link to="/portfolio">PORTFOLIO</Link>
//                 <Link to="/about">ABOUT</Link>
//                 <Link to="/contact">CONTACT</Link>
//                 <Link to="/arkanoid">GAME</Link>
//               </div>
//             </li>
//           </ul>
//         </nav>

//         <div className="main">
//           <div className="header">
//             <h2>
//               {hi}
//               {iam}
//               <span className="highlight">{name}</span>
//               {point} <br />
//               {job}
//             </h2>
//             <a href="/portfolio">{projects}</a>
//           </div>
//         </div>
//         <div className="footer">
//           <a href="https://www.linkedin.com/in/alessandro-moretti-50aa851ab/">
//             <img
//               src="././img/icons/linkedin.svg"
//               alt="LinkedIn"
//               width="30ch"
//               height="25ch"
//             />
//           </a>
//           <a href="mailto:moretti@gianmarialessandro.com">
//             <img
//               src="././img/icons/emailicon.png"
//               alt="email"
//               width="30ch"
//               height="25ch"
//             />
//           </a>
//           <a href="https://github.com/gianmarialessandro/">
//             <img
//               src="././img/icons/github.svg"
//               alt="gitHub"
//               width="55ch"
//               height="25ch"
//             />
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;
