import React from "react";
import hero from "../images/hero.jpg";
import hero4 from "../images/hero_4.jpg";
import hero10 from "../images/hero_10.jpg";

const Hero = () => {
  return (
    <div className="relative" style={{ height: `36rem` }}>
      <img
        className="h-full w-full object-cover"
        style={{ objectPosition: `center 80%` }}
        src={hero10}
      ></img>
      <div
        className="absolute h-full w-full top-0 left-0 z-10"
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.65) 24rem, transparent 100%)`,
        }}
      >
        <div className="container h-full mx-auto">
          <div className="h-full max-w-xl flex flex-col items-start justify-center">
            <h1 className="text-white text-7xl font-extrabold inline-block mb-12">
              Find your <br></br> <span className="text-red-500">Right</span>{" "}
              Car
            </h1>
            <div className="grid grid-cols-2 gap-6">
              <button className="w-48 py-4 border border-red-600 rounded-md bg-red-600 text-white shadow-2xl text-lg">
                Search
              </button>
              <button className="w-48 py-4 border border-gray-100 rounded-md bg-transparent text-accents-7 shadow-2xl text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
