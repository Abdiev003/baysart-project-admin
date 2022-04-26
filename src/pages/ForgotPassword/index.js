import React from "react";
import Footer from "../../layout/Footer";
import HeaderAuth from "../../layout/HeaderAuth";
import Button from "../../components/Button/Button";
import Forgot from "../../assets/images/forgot.svg";
import InputAuth from "../../components/InputAuth";

import "./forgotpassword.css";

const ForgotPassword = () => {
  return (
    <div>
      <HeaderAuth />
      <main className="forgot-area">
        <div className="forgot-border">
          <div className="forgot-flex">
            <div className="forgot-txt">
              <h4>Forgot Your Password?</h4>
              <h5>
                Dont’t fret! Just type in your emal and we will send you a code
                to reset your password!
              </h5>
              <label>Your Email</label>
              <InputAuth
                top="19px"
                width="420px"
                height="60px"
                radius="10px"
                placeholder={"Simple Text"}
              />
              <Button
                width="193px"
                height="42px"
                backgroundColor="#1C64F2"
                color="#F9FAFB"
                borderRadius="8px"
                text="Recover Password"
                align={"start"}
              />
            </div>

            <div className="forgot-img">
              <img src={Forgot} alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
