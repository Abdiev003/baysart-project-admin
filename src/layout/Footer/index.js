import React from "react";
import Linkedin from "../../assets/images/linkedin.svg";
import Twitter from "../../assets/images/twitter.svg";
import Facebook from "../../assets/images/facebook.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-area">
        <p>© 2021 Baysart. All Rights Reserved</p>
        <div className="footer-social-flex">
          <img src={Linkedin} alt="" />
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
