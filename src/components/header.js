import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <a className="text-black inline-flex items-center">
          <span className="text-xl font-extrabold">Vincar</span>
        </a>
        <ul
          className="grid justify-between items-center gap-8 text-sm"
          style={{ gridTemplateColumns: `repeat(4, auto)` }}
        >
          <li className="">
            <a>
              Inventory{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="inline-block stroke-current w-5"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="M112 184l144 144 144-144"
                />
              </svg>
            </a>
          </li>
          <li className="">
            <a>
              Services{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="inline-block stroke-current w-5"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="M112 184l144 144 144-144"
                />
              </svg>
            </a>
          </li>
          <li className="">
            <a>About Us</a>
          </li>
          <li className="">
            <a>FAQ</a>
          </li>
        </ul>
        <ul
          className="grid justify-between items-center gap-8 text-sm"
          style={{ gridTemplateColumns: `repeat(2, auto)` }}
        >
          <li className="">
            <a className="">Login</a>
          </li>
          <li className="px-3 py-2 rounded-md bg-red-600 text-white shadow-md">
            <a>Sign In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
