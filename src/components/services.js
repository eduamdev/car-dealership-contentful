import React from "react";

const ServiceItem = ({ title, text, icon }) => {
  return (
    <div className="grid items-center justify-start">
      <div className="mb-6">
        <div className="h-10 w-10 text-primary">{icon}</div>
      </div>
      <div className="">
        <h4 className="text-lg leading-6 font-medium text-black">{title}</h4>
        <p className="mt-2 text-lg leading-7 text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-24">
        <div className="max-w-screen-xl mx-auto px-8">
          <ul className="grid md:grid-cols-3 col-gap-12 row-gap-6">
            <li>
              <ServiceItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=" stroke-current"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M336 176L225.2 304 176 255.8"
                    />
                    <path
                      d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                  </svg>
                }
                title="Your safety is our top priority"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. "
              ></ServiceItem>
            </li>
            <li className="mt-0">
              <ServiceItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=" fill-current stroke-current"
                  >
                    <rect
                      x="48"
                      y="96"
                      width="416"
                      height="320"
                      rx="56"
                      ry="56"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      strokeWidth="60"
                      d="M48 192h416M128 300h48v20h-48z"
                    />
                  </svg>
                }
                title="No hidden fees"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. "
              ></ServiceItem>
            </li>
            <li className="mt-0">
              <ServiceItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=" stroke-current"
                  >
                    <path
                      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                    <path
                      d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                    <path
                      d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M256 48v416M464 256H48"
                    />
                  </svg>
                }
                title="1,000+ distributors around the globe"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. "
              ></ServiceItem>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
