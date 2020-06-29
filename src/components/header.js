import React from "react";
import { SvgLogo } from "./svg";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <a className="text-white inline-flex items-center">
          {SvgLogo} <span className="tracking-wider text-lg">Vinfy</span>
        </a>
        <ul
          className="grid justify-between items-center gap-8"
          style={{ gridTemplateColumns: `repeat(3, auto)` }}
        >
          <li className="">
            <a>About</a>
          </li>
          <li className="">
            <a className="border border-accents-2 px-3 py-2 rounded-md">
              Contact Us
            </a>
          </li>
          <li className="">
            <a>Sign In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
