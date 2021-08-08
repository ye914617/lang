import React from "react";
import logo from "./logo.png";

const NavbarLogo = () => {
  return (
    <div>
      <a href="/">
        <img src={logo} alt="navbar-logo" />
      </a>
    </div>
  );
};

export default NavbarLogo;
