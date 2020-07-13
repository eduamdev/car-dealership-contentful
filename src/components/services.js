import React from "react";

const ServiceItem = ({ title, text, icon }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md text-primary">
          {icon}
        </div>
      </div>
      <div className="ml-6">
        <h4 className="text-lg leading-6 font-medium text-black">{title}</h4>
        <p className="mt-2 text-base leading-6 text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="border-t bg-gray-100 border-b border-accents-7">
      <div className="container mx-auto py-12">
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center">
              <h3 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black">
                Why Vincar
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-600 mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit.
              </p>
            </div>

            <div className="mt-10">
              <ul className="grid md:grid-cols-2 col-gap-8 row-gap-6">
                <li>
                  <ServiceItem
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-8 w-8 stroke-current"
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
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></ServiceItem>
                </li>
                <li className="mt-0">
                  <ServiceItem
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-8 w-8 fill-current stroke-current"
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
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></ServiceItem>
                </li>
                <li className="mt-0">
                  <ServiceItem
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-8 w-8 fill-current stroke-current"
                      >
                        <path
                          d="M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <path d="M352 144a32 32 0 1132-32 32 32 0 01-32 32z" />
                        <path
                          d="M230 480l262-262a13.81 13.81 0 004-10V80"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                      </svg>
                    }
                    title="Get the best deals"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></ServiceItem>
                </li>
                <li className="mt-0">
                  <ServiceItem
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-8 w-8 stroke-current"
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
                    title="Distributors worldwide"
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
