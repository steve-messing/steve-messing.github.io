import React from "react";
import Logo from "./logo";
import "../css/style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <div className="header">
        <Logo />
        <h1 className="name">STEVE MESSING</h1>
      </div>
    </Link>
  );
};

export default Header;
