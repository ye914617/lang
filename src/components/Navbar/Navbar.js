import React from "react";
import "./Navbar.css";
import NavbarLogo from "./NavbarLogo";
import { GrLogin, GrLogout } from "react-icons/gr";
import * as GiIcons from "react-icons/gi"; //Better way if there are too many icons
import { useGlobalContext } from "../../Global/GlobalContext";
import { Link } from "react-router-dom";
import fire from "../../firebase/fire";

const Navbar = () => {
  const { showMenubar, loginState, showLogin, checkLogin, showAlert } =
    useGlobalContext();
  const { isLogin } = loginState;

  const handleLogout = () => {
    console.log("Log out");
    fire.auth().signOut();
    showAlert({ show: true, alertType: "fail", alertMsg: "你已登出" });
    checkLogin(false);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-logo">
          <NavbarLogo />
        </div>

        <div className="nav-btn">
          {isLogin ? (
            <>
              <Link to="/adopt">
                <button className="bag">
                  <GiIcons.GiDogBowl className="bag-logo" />
                </button>
              </Link>

              <button className="login" onClick={handleLogout}>
                <GrLogout className="login-logo" />
              </button>
            </>
          ) : (
            <button className="register" onClick={() => showLogin(true)}>
              <GrLogin className="login-logo" />
              <span className="login-span">登入</span>
            </button>
          )}

          <button className="hamburger" onClick={showMenubar}>
            <GiIcons.GiHamburgerMenu className="hamburger-logo" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
