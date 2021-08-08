import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-info">
          <div className="footer-content-1 footer-content">
            <h5>Lang</h5>
            <p>Langzihome@gmail.com</p>
            <p>033-7228190</p>
            <p>29, Qs.land, 31750, St.Georgia</p>
          </div>
          <div className="footer-content-2 footer-content">
            <h5>About us</h5>
            <p>Adoption</p>
            <p>Donation</p>
            <p>Latest news</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2021 Lang. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
