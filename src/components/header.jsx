import React from "react";
import Logo from "./logo";
import "../css/style.css";

const Header = () => {
  return (
    <a href="/">
      <div className="header">
        <Logo />
        <h1 className="name">STEVE MESSING</h1>
      </div>
    </a>
  );
};

export default Header;
