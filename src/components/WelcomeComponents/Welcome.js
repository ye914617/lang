import React, { useEffect, useRef } from "react";
import "./Welcome.css";
import { useGlobalContext } from "../../Global/GlobalContext";
import { Link } from "react-router-dom";

const Welcome = () => {
  const ref = useRef();
  const { loginState, showLogin } = useGlobalContext();
  const { loginPage } = loginState;

  /////////////////////Click outside and close the login page

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (loginPage && ref.current && !ref.current.contains(e.target)) {
        showLogin(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [loginPage, showLogin]);
  ////////////////////////////////////////////////////////

  return (
    <div className="welcome-form-container">
      <div className="welcome-form" ref={ref}>
        <div className="welcome-title">
          <h5>登入成功</h5>
        </div>
        <div className="welcome-info">
          <p>歡迎回來</p>
          <p>祝你有個美好的一天</p>
        </div>
        <div className="welcome-btn-container">
          <Link to="/" className="welcome-btn-link">
            <button className="welcome-btn" onClick={() => showLogin(false)}>
              到主頁
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
