import React, { useEffect } from "react";
import "./Alert.css";
import { useGlobalContext } from "../../Global/GlobalContext";

const Alert = () => {
  const { alertState, removeAlert, adoptState, loginState } =
    useGlobalContext();
  const { alertType, alertMsg } = alertState;

  //每次在alert出現的1秒後自動執行remove alert把show設成false,不然show會一直是true
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [adoptState, loginState]);

  return (
    <div className={`alert error-message alert-${alertType}`}>
      <h5>{alertMsg}</h5>
    </div>
  );
};

export default Alert;
