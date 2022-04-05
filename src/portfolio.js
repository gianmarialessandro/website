import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fixPortfolioPage, clearPortfolioPage, hiddenOverflow } from "./utils";

import './portfolio.css';


const Portfolio = () => {
    useEffect(() => {
      hiddenOverflow();
      fixPortfolioPage();
    }, []);
  
    return (
      <div>
        <h1>Portfolio</h1>
      </div>
    );
  };
  

export default Portfolio;