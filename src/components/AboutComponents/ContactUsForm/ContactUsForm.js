import React, { useState, useEffect } from "react";
import "./ContactUsForm.css";
import { useGlobalContext } from "../../../Global/GlobalContext";

const ContactUsForm = () => {
  const { contactSuccess, submitForm } = useGlobalContext();

  const [senderContact, setSenderContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [titleContact, setTitleContact] = useState("");
  const [contentContact, setContentContact] = useState("");
  const [messageContact, setMessageContact] = useState("");
  const [submitSuccessContact, setSubmitSuccessContact] = useState(false);

  useEffect(() => {
    checkEmpty(); //每次改變state時都執行
  }, [senderContact, emailContact, titleContact, contentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkEmpty(); //submit時再執行一次
    submitForm();
    if (senderContact && emailContact && titleContact && contentContact) {
      clearInput();
    }
  };

  const clearInput = () => {
    setSenderContact("");
    setEmailContact("");
    setTitleContact("");
    setContentContact("");
  };

  const checkEmpty = () => {
    let forContactState = {
      senderContact,
      emailContact,
      titleContact,
      contentContact,
      messageContact,
      submitSuccessContact,
    };
    setSubmitSuccessContact(false);
    let alertMessage = "";
    let alertType = "發生錯誤";
    if (senderContact && emailContact && titleContact && contentContact) {
      alertMessage = "我們已收到您的來信，我們會盡快處理，謝謝！";
      alertType = "成功寄出";
      setSubmitSuccessContact(true);
      console.log(submitSuccessContact); //console.log
    }
    if (!senderContact) {
      alertMessage = "請填寫寄件人";
    }
    if (senderContact && !emailContact) {
      alertMessage = "請填寫E-mail";
    }
    if (senderContact && emailContact && !titleContact) {
      alertMessage = "請填寫主旨";
    }
    if (senderContact && emailContact && titleContact && !contentContact) {
      alertMessage = "請填寫內容";
    }
    setMessageContact(alertMessage);
    contactSuccess(forContactState); //把state傳到globalcontext
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formcontainer">
        <h3 className="formtitle">Contact Us</h3>
        <div className="forminputs">
          <input
            type="text"
            className="forminput "
            placeholder="寄件人"
            value={senderContact}
            onChange={(e) => setSenderContact(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          />
          <input
            type="text"
            className="forminput "
            placeholder="E-mail"
            value={emailContact}
            onChange={(e) => setEmailContact(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          />
          <input
            type="text"
            className="forminput "
            placeholder="主旨"
            value={titleContact}
            onChange={(e) => setTitleContact(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          />
          <textarea
            className="forminput biginput"
            placeholder="我想說..."
            value={contentContact}
            onChange={(e) => setContentContact(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          />
          <button className="formbutton">送出</button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
