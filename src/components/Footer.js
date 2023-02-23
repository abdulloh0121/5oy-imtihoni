import React from "react";
import "../css/Footer.css";
import Inistagiram from "../assets/insta.png";

function Footer() {
  return (
    <div className="footer">
      <a
        style={{ color: "white", textDecoration: "none" }}
        href="https://www.instagram.com/abdulloh_js_programmer/"
        target="_blank"
        without
        rel="noreferrer"
      >
        <h1>abdulloh_js_programmer</h1>
      </a>
      <a
        style={{ color: "white", textDecoration: "none" }}
        target="_blank"
        without
        rel="noreferrer"
        href="https://www.instagram.com/abdulloh_js_programmer/"
      >
        <img className="insta" width={36} src={Inistagiram} alt="insta" />
      </a>
    </div>
  );
}

export default Footer;
