import React from "react";

import Button from "../../components/Button/Button";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

import Sleep from "../../assets/images/erorr.svg";
import Back from "../../assets/images/errorback.svg";

import "./error.css";

const Erorr = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="error-border">
          <div className="eroor-txt">
            <div className="error-logo">
              <h1>Page not found</h1>
              <h4>
                Oops! Looks like you followed a bad link. If you think this is a
                problem with us, pleasse tell us
              </h4>
              <Button
                width="137px"
                height="40px"
                color="#F9FAFB"
                backgroundColor="#1C64F2"
                borderRadius="8px"
                text="Go Back Page"
                img={Back}
              />
            </div>
          </div>

          <div className="error-img">
            <img src={Sleep} alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Erorr;
