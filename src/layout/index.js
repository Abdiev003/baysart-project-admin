import React, { Children } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div
      className="container-xd"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      <Header />
      <div className="d-flex">
        <Sidebar />
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
