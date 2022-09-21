import React from "react";
import logo from "../assets/logo.png";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <div className="flex justify-between  my-4 items-center ">
      <div className="logo -z-20">
        <img src={logo} alt="logo" />
      </div>
      {/* Hamburger menu */}
      <div className="">
        <HamburgerMenu />

      </div>

      <ul className="hidden md:flex md:gap-10 md:justify-between">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
