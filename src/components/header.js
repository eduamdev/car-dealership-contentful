import React from "react";
import Button from "./button";
import Announcement from "./announcement";

const Header = () => {
  return (
    <>
      <Announcement></Announcement>
      <div className="header">
        <div className="h-full flex justify-between items-center container mx-auto text-accents-4 max-w-screen-xl mx-auto px-8">
          <a className="header__logo">Vincar</a>
          <div class="header__menu">
            <button
              type="button"
              class="appearance-none bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="header__nav">
            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500"  */}
              <button
                type="button"
                class="appearance-none bg-transparent text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                <span>Inventory</span>
                {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                <svg
                  class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="relative">
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
            </div>
            <div className="relative">
              <a>Offers</a>
            </div>
            <div className="relative">
              <a>About Us</a>
            </div>
          </nav>
          <div className="header__account">
            <a
              href="#"
              className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500"
            >
              Login
            </a>
            <Button
              tag="link"
              text="Sign In"
              color="primary"
              size="xs"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
