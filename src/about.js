import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fixAboutPage, clearAboutPage } from "./utils";

import './about.css';


const About = () => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      fixAboutPage();
    }, []);
  
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  };
  

export default About;