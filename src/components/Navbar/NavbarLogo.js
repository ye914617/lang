import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div>
      <Link exact to="/">
        <img src={logo} alt="navbar-logo" />
      </Link>
    </div>
  );
};

export default NavbarLogo;
