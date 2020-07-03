import React from "react";

const ServiceItem = ({ title, text, icon }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg leading-6 font-medium text-white">{title}</h4>
        <p className="mt-2 text-base leading-6 text-gray-500">{text}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-black border-t border-accents-2">
      <div className="container mx-auto py-12">
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center">
              <h3 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white">
                Why VinCar
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit.
              </p>
            </div>

            <div className="mt-20">
              <ul className="grid grid-cols-2 col-gap-8 row-gap-10">
                <li>
                  <ServiceItem
                    icon={
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    }
                    title="Competitive exchange rates"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></ServiceItem>
                </li>
                <li className="mt-0">
                  <ServiceItem
                    icon={
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
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    }
                    title="No hidden fees"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></ServiceItem>
                </li>
                <li className="mt-0">
                  <ServiceItem
                    icon={
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    }
                    title="Transfers are instant"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></ServiceItem>
                </li>
                <li className="mt-0">
                  <ServiceItem
                    icon={
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    }
                    title="Mobile notifications"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></ServiceItem>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
