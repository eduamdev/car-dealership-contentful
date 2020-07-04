import React from "react";
import hero from "../images/hero.jpg";
import hero4 from "../images/hero_4.jpg";
import hero10 from "../images/hero_10.jpg";

const Hero = () => {
  return (
    <div className="relative bg-accents-8" style={{ height: `36rem` }}>
      <div className="grid grid-cols-2 h-full">
        <div className="absolute w-full h-full">
          <div className="container h-full flex flex-col items-start justify-center mx-auto">
            <div className="max-w-xl">
              <h1 className="text-black text-5xl font-extrabold inline-block mb-5 tracking-tight">
                Best way to find your{" "}
                <span className="text-red-600">right car</span>
              </h1>
              <p className="mb-10 text-base leading-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus mattis rhoncus urna neque viverra justo.
              </p>
              <div className="inline-grid grid-cols-2 gap-4">
                <button className="w-40 py-4 shadow-md rounded-md bg-red-600 text-white">
                  Search
                </button>
                <button className="w-40 py-4 shadow-md rounded-md bg-white text-accents-4">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-full w-full object-cover"
          style={{ objectPosition: `center center`, gridArea: `1/2` }}
          src={hero10}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
