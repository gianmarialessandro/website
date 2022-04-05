import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fixArkanoidPage, clearArkanoidPage, hiddenOverflow } from "./utils";

import "./arkanoid.css";

const Arkanoid = () => {
  useEffect(() => {
    hiddenOverflow();
    fixArkanoidPage();
  }, []);

  return (
    <div>
      <h1>Arkanoid</h1>
    </div>
  );
};

export default Arkanoid;
