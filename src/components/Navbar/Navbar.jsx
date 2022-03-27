import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Navbar.css";
// navbar scroll background change
const Navbar = () => {
  const [show, setShow] = useState(true);
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });
  return (
    <nav className={!show ? "navbar menu-open" : "navbar "}>
      <div className="logo">
        <a href="http://">
          <span>Proweb</span>
          <sub>BD</sub>
        </a>
      </div>
      <div className="menu-icon" onClick={() => setShow(!show)}>
        {show ? (
          <FontAwesomeIcon icon={faBarsStaggered} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
