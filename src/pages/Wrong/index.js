import React from "react";

import Button from "../../components/Button/Button";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

import Wrong from "../../assets/images/wrong.svg";
import Back from "../../assets/images/errorback.svg";

import "./wrong.css";

const Erorr = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="wrong-border">
          <div className="wrong-txt">
            <div className="wrong-logo">
              <h1>Something has gone seriously wrong</h1>
              <h4>
                It’s always time for a coffee break. We should be back by the
                time you finisg your coffe
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

          <div className="wrong-img">
            <img src={Wrong} alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Erorr;
