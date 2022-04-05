import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fixContactPage, clearContactPage, hiddenOverflow } from "./utils";

import "./contact.css";

const Contact = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    fixContactPage();
  }, []);

  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
