import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <a href="http://">
            <span>Proweb</span>
            <sub>BD</sub>
          </a>
        </div>
        <ul className="nav-items">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">About</a>
          </li>
          <li>
            <a href="/home">Portfolio</a>
          </li>
          <li>
            <a href="/home">Contact</a>
          </li>
          <li>
            <a href="/home">FCQ</a>
          </li>
        </ul>
        <button className="open-menu btn">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
        <button className="close-menu btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
