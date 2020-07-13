import React from "react";
import Button from "./button";
import Announcement from "./announcement";

const Header = () => {
  return (
    <>
      <Announcement></Announcement>
      <div className="h-16 bg-white border-b border-gray-400">
        <div className="h-full flex justify-between items-center container mx-auto text-accents-4 max-w-screen-xl mx-auto px-8">
          <a className="text-black inline-flex items-center text-2xl font-black tracking-tight">
            Vincar
          </a>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="appearance-none bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out"
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
          <nav className="hidden md:flex md:space-x-6">
            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-600"  */}
              <button
                type="button"
                class="appearance-none bg-transparent text-gray-600 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                <span>Inventory</span>
                {/* Item active: "text-gray-600", Item inactive: "text-gray-500" */}
                <svg
                  class="text-gray-500 h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150"
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
              {/* Item active: "text-gray-900", Item inactive: "text-gray-600"  */}
              <button
                type="button"
                class="appearance-none bg-transparent text-gray-600 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                <span>Services</span>
                {/* Item active: "text-gray-600", Item inactive: "text-gray-500" */}
                <svg
                  class="text-gray-500 h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150"
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

            <a
              href="#"
              class="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Offers
            </a>
            <a
              href="#"
              class="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              About Us
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8">
            <a
              href="#"
              className="whitespace-no-wrap text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Login
            </a>
            <span class="inline-flex rounded-md shadow-sm">
              <Button
                href="#"
                tag="link"
                text="Sign In"
                color="primary"
                size="xs"
              ></Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
