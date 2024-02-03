import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/the meal logo_white.svg";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link className="link" to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
