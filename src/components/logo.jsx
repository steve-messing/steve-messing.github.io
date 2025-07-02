import React from "react";
import logo from "../assets/sm-logo-white-bg.png"
import "../css/style.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="steve messing logo" style={{width: "100px"}}></img>
    </div>
  );
}

export default Logo;