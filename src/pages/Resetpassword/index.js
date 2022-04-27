import React from "react";
import Footer from "../../layout/Footer";
import HeaderAuth from "../../layout/HeaderAuth";
import Button from "../../components/Button/Button";
import Reset from "../../assets/images/reset.svg";
import InputAuth from "../../components/InputAuth";

import "./resetpassword.css";

const ForgotPassword = () => {
  return (
    <div>
      <HeaderAuth />
      <main className="reset-area">
        <div className="reset-border">
          <div className="reset-flex">
            <div className="reset-img">
              <img src={Reset} alt="" />
            </div>
            <div className="reset-txt">
              <h2>Reset Password</h2>
              <label htmlFor="">Reset Password</label>
              <InputAuth
                placeholder={"Simple Text"}
                width="420px"
                height="60px"
                display="none"
              />

              <label htmlFor="">Confirm Password</label>
              <InputAuth
                placeholder={"Simple Text"}
                width="420px"
                height="60px"
                display="none"
              />
              <Button
              align={"end"}
                width="171px"
                height="42px"
                backgroundColor="#1C64F2"
                borderRadius="8px"
                color="#F9FAFB"
                text="Reset Password"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
