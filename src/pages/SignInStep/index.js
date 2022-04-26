import React from "react";

import Footer from "../../layout/Footer";
import HeaderAuth from "../../layout/HeaderAuth";
import Client from "../../assets/images/client.svg";
import Confirm from "../../assets/images/confirm.svg";

import InputAuth from "../../components/InputAuth";
import Button from "../../components/Button/Button";

import "./sign-in-step.css";

const SignInStep = () => {
  return (
    <div>
      <HeaderAuth />
      <main className="signin-step">
        <div className="signin-step-container">
          <div className="signin-flex">
            <div className="signin-border">
              <div className="signin-client-flex">
                <div className="signin-client">
                  <img src={Client} alt="" />
                </div>
                <div className="signin-txt">
                  <h4>Name Surname</h4>
                  <label>Name Surname is that you?</label>
                </div>
              </div>
              <div className="input-area">
                <h5>Password</h5>
                <InputAuth
                  width="420px"
                  height="60px"
                  radius="10px"
                  display="none"
                  padding="0 24px"
                  placeholder={"Simple Text"}
                />
                <Button
                  width="132px"
                  height="42px"
                  color="#F9FAFB"
                  borderRadius="8px"
                  backgroundColor="#1C64F2"
                  text={"Confirm"}
                  align={"center"}
                  img={Confirm}
                  padding={"0 40px"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignInStep;
