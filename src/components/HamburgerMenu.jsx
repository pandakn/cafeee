import React, { useState } from "react";
import { FaBars, FaPlus } from "react-icons/fa";

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickHamburger = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {menuOpen ? (
        <div className="overflow-hidden z-50">
          <FaPlus
            className="text-4xl md:hidden cursor-pointer rotate-45 text-white"
            onClick={clickHamburger}
          />
          <div
            id="menu"
            className="w-full md:hidden bg-[#B49985] h-screen absolute top-0 right-0"
          >
            <ul className="h-full flex flex-col justify-center items-center gap-24 text-white font-semibold text-[2rem] ">
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
        </div>
      ) : (
        <FaBars
          className="text-3xl md:hidden cursor-pointer"
          onClick={clickHamburger}
        />
      )}
    </div>
  );
}

export default HamburgerMenu;
