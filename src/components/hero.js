import React from "react";
import hero from "../images/hero.jpg";
import hero4 from "../images/hero_4.jpg";
import hero10 from "../images/hero_10.jpg";

const Hero = () => {
  return (
    <div className="relative bg-white" style={{ height: `36rem` }}>
      <div className="grid grid-cols-2 h-full">
        <div className="absolute w-full h-full">
          <div className="container h-full flex flex-col items-start justify-center mx-auto">
            <div className="max-w-xl">
              <h1 className="text-black text-7xl font-extrabold inline-block mb-12">
                Find your <br></br> <span className="text-red-600">Right</span>{" "}
                Car
              </h1>
              <div className="grid grid-cols-2 gap-6">
                <button className="w-48 py-4 border border-red-600 rounded-md bg-red-600 text-white text-lg">
                  Search
                </button>
                <button className="w-48 py-4 border border-gray-400 rounded-md bg-transparent text-accents-4 text-lg">
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
