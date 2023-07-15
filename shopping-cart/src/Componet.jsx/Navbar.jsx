import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar">

        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link ">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"} className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact"} className="nav-link ">
              Contact
            </NavLink>
          </li>
        </ul>
        </nav>
      </div>
    </>
  );
};
