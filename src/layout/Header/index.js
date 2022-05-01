import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import CategoryMenu from "../../components/CategoryMenu";

import Logo from "../../assets/images/baysartLogo.svg";
import Hamburger from "../../assets/images/hamburger.svg";
import Close from "../../assets/images/close.svg";
import Notification from "../../assets/images/notification.svg";
import Avatar from "../../assets/images/avatar.svg";
import Search from "../../assets/images/search.svg";

import "./header.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {menuOpen && <CategoryMenu />}
      <nav className="header-container d-flex justify-content-between align-items-center">
        <div className="nav-wrapper d-flex align-items-center">
          <Link to="/" className="brand-logo me-2">
            <img src={Logo} />
          </Link>
          <div className="cursor-pointer btn p-0">
            <img
              onClick={() => setMenuOpen(!menuOpen)}
              src={menuOpen ? Close : Hamburger}
              alt=""
              className="hamburger"
            />
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
            icon={Search}
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
