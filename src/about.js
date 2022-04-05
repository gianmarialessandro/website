import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fixAboutPage, clearAboutPage, hiddenOverflow } from "./utils";

import './about.css';


const About = () => {
    useEffect(() => {
      hiddenOverflow();
      fixAboutPage();
    }, []);
  
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  };
  

export default About;