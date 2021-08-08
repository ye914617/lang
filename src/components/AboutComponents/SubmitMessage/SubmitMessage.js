import React from "react";
import "./SubmitMessage.css";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useGlobalContext } from "../../../Global/GlobalContext";

const SubmitMessage = () => {
  const { cancelSubmitForm, contactState } = useGlobalContext();
  const { submitSuccess, message } = contactState;
  return (
    <div className="submitmessage-container">
      <div className="submitmessage">
        {submitSuccess ? (
          <TiTickOutline className="tick" />
        ) : (
          <ImCross className="cross" />
        )}

        <h4>{submitSuccess ? "成功寄出" : "發生錯誤"}</h4>
        <p>{message}</p>
        <button onClick={cancelSubmitForm}>OK</button>
      </div>
    </div>
  );
};

export default SubmitMessage;
