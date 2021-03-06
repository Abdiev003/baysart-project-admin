import React from "react";
import Footer from "../../layout/Footer";
import HeaderAuth from "../../layout/HeaderAuth";
import Human from "../../assets/images/human.svg";
import InputAuth from "../../components/InputAuth";
import "./signin.css";
import Button from "../../components/Button/Button";

const SignIn = () => {
  const width = window.innerWidth;

  const height = window.innerHeight;
  return (
    <div>
      <HeaderAuth />
      <main className="signin">
        <div className="signin-box">
          <div className="signin-img">
            <img src={Human} alt="" />
          </div>

          <div className="signin-txt">
            <h2>Sign in</h2>
            <InputAuth
              label={"Your Email"}
              placeholder={"Sample Text"}
              width={width < 768 ? "205px" : "420px"}
              height="60px"
              margin={"20px"}
            />
            <InputAuth
              label={"Password"}
              padding={"10px 20px"}
              display={"none"}
              placeholder={"Sample Text"}
              width={width < 768 ? "205px" : "420px"}
              height="60px"
            />

            <Button
              color="#F9FAFB"
              backgroundColor="#1C64F2"
              width={width < 768 ? "50px" : "96px"}
              height={height < 768 ? "42px" :  "42px"}
              borderRadius="8px"
              boxShadow="0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)"
              text="Sign In"
              align={"end"}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
