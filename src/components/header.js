import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <a className="header__nav__logo">Vincar</a>
        <ul className="header__nav__menu">
          <li>
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
          <li>
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
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
        <ul className="header__nav__account">
          <li>
            <a>Login</a>
          </li>
          <li className="header__nav__account__btn">
            <a>Sign In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
