import React from "react";
import Headercontainer from "../Headercontainer/Headercontainer";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Headercontainer />
      </header>
    </div>
  );
};

export default Header;
