import React from "react";
import { NavLink } from "react-router-dom";
import Over from "../../assets/images/over.svg";
import Pages from "../../assets/images/pages.svg";
import Bug from "../../assets/images/bug.svg";
import Components from "../../assets/images/components.svg";
import Help from "../../assets/images/help.svg";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              <img src={Over} alt="" />
              <span>Overview</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pages"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              <img src={Pages} alt="" />
              <span>Pages</span>
             
            </NavLink>
           
          </li>
          <li>
          
            <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              <img src={Bug} alt="" />
              <span>Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/test"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              <img src={Components} alt="" />
              <span>Components</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/test1"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              <img src={Help} alt="" />
              <span>Help</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
