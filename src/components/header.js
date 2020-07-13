import React from "react";
import Button from "./button";
import Announcement from "./announcement";

const Header = () => {
  return (
    <>
      <Announcement></Announcement>
      <div className="h-20 bg-white border-b border-gray-400">
        <div className="h-full flex justify-between items-center container mx-auto text-accents-4 max-w-screen-xl mx-auto px-8">
          <a className="text-black inline-flex items-center text-2xl font-black tracking-tight">
            Vincar
          </a>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="appearance-none bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                className="appearance-none bg-transparent text-gray-600 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                <span>Inventory</span>
                {/* Item active: "text-gray-600", Item inactive: "text-gray-500" */}
                <svg
                  className="text-gray-500 h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-600"  */}
              <button
                type="button"
                className="appearance-none bg-transparent text-gray-600 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                <span>Services</span>
                {/* Item active: "text-gray-600", Item inactive: "text-gray-500" */}
                <svg
                  className="text-gray-500 h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*
                    'Services' flyout menu, show/hide based on flyout menu state.

                    Entering: "transition ease-out duration-200"
                    From: "opacity-0 translate-y-1"
                    To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                    From: "opacity-100 translate-y-0"
                    To: "opacity-0 translate-y-1"
              */}
              <div className="z-10 absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg">
                  <div className="rounded-lg shadow-xs overflow-hidden">
                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Engagement
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            Speak directly to your customers in a more
                            meaningful way.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Security
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            Your customers data will be safe and secure.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Integrations
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            Connect with third-party tools that you’re already
                            using.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <div className="space-y-1">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            Automations
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            Build strategic funnels that will drive your
                            customers to convert
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="px-5 py-5 bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div className="flow-root">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>Watch Demo</span>
                        </a>
                      </div>
                      <div className="flow-root">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span>Contact Sales</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Offers
            </a>
            <a
              href="#"
              className="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
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
            <span className="inline-flex rounded-md shadow-sm">
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
