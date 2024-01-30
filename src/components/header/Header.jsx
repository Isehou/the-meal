import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link className="link" to="/">
          The Meal
        </Link>
        {/* <Link className="link" to="/products-detail">
          Products Details
        </Link> */}
        <Link className="link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
