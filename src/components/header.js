import React from "react";

const SvgLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="text-accents-7 fill-current w-8 mr-3"
  >
    <path d="M336 336H32a16 16 0 01-14-23.81l152-272a16 16 0 0127.94 0l152 272A16 16 0 01336 336z" />
    <path d="M336 160a161.07 161.07 0 00-32.57 3.32l74.47 133.27A48 48 0 01336 368H183.33A160 160 0 10336 160z" />
  </svg>
);

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
