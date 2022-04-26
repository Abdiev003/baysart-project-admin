import React from "react";
import Logo from "../../assets/images/baysartLogo.svg";
import SignIn from "../../assets/images/signin.svg";
import "./headerauth.css";

const HeaderAuth = () => {
  return (
    <header className="header-auth">
      <div className="header-auth-container">
        <div className="header-flex">
          <div className="header-right">
            <img src={Logo} alt="" />
            <div className="header-signing">
              <img src={SignIn} alt="" />
              <div className="header-login-txt">
                <h4>Login</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAuth;
