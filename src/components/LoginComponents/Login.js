import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import fire from "../../firebase/fire";
import { useGlobalContext } from "../../Global/GlobalContext";

const Login = () => {
  const ref = useRef();
  const { loginState, showLogin, checkLogin, showAlert } = useGlobalContext();
  const { loginPage } = loginState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        //如果已經登入就執行以下
        showAlert({ show: true, alertType: "success", alertMsg: "Welcome" });
        clearInputs();
        checkLogin(true);
        //要如何登入後自動關掉登入頁面？再加一個state來判斷？
      } else {
        //如果未登入就執行以下
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

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
    <div className="login-form-container">
      <div className="login-form" ref={ref}>
        <div className="login-title">
          {hasAccount ? <h5>會員登入</h5> : <h5>會員註冊</h5>}
        </div>
        <div className="login-info">
          <div className="login-info-user login-info-content">
            <label htmlFor="login-user">帳號</label>
            <input
              type="text"
              placeholder="請輸入帳號"
              id="login-user"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="error-message">{emailError}</p>
          <div className="login-info-password login-info-content">
            <label htmlFor="login-password">密碼</label>
            <input
              type="text"
              placeholder="請輸入密碼"
              id="login-password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="error-message">{passwordError}</p>
        </div>
        {hasAccount ? (
          <>
            <div className="login-btn-container">
              <button className="login-btn" onClick={handleLogin}>
                登入
              </button>
            </div>
            <p onClick={() => setHasAccount(!hasAccount)}>沒有帳號？註冊賬號</p>
          </>
        ) : (
          <>
            <div className="login-btn-container">
              <button className="login-btn" onClick={handleSignup}>
                註冊
              </button>
            </div>
            <p onClick={() => setHasAccount(!hasAccount)}>已有帳號？前往登入</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
