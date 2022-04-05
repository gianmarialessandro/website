import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Arkanoid from "./arkanoid";

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/arkanoid" element={<Arkanoid />} />
      </Routes>
    </>
  );
}

export default App;
