import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/images/baysartLogo.svg";
import Hamburger from "../../assets/images/hamburger.svg";
import Notification from "../../assets/images/notification.svg";
import Avatar from "../../assets/images/avatar.svg";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <nav className="header-container d-flex justify-content-between align-items-center">
        <div className="nav-wrapper d-flex align-items-center">
          <Link to="/" className="brand-logo me-2">
            <img src={Logo} />
          </Link>
          <div className="cursor-pointer btn p-0">
            <img src={Hamburger} alt="" />
          </div>
        </div>
        <div className="header-input">
          <Input
            placeholder="Search"
            type="text"
            name="search"
            id="search"
            onChange={setSearch}
            value={search}
          />
        </div>
        <div className="header-profile d-flex align-items-center">
          <img src={Notification} alt="" />
          <div className="avatar ms-4">
            <img src={Avatar} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
