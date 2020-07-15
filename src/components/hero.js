import React from "react";
import Button from "./button";
import hero from "../img/hero.jpg";
import hero1 from "../img/hero1.jpg";
import hero4 from "../img/hero_4.jpg";
import hero10 from "../img/hero_10.jpg";

const Hero = () => {
  return (
    <div className="relative bg-accents-8" style={{ height: `36rem` }}>
      <div
        className="grid h-full"
        style={{ gridTemplateColumns: `minmax(42rem, 1.5fr) 1fr` }}
      >
        <div className="absolute w-full h-full">
          <div className="container h-full flex flex-col items-start justify-center max-w-screen-xl mx-auto px-8">
            <div className="max-w-xl">
              <h1 className="text-black text-5xl font-extrabold inline-block mb-6 tracking-tight leading-none">
                Best way to find your{" "}
                <span className="text-primary">right car</span>
              </h1>
              <p className="mb-10 text-base leading-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus mattis rhoncus urna neque viverra justo.
              </p>
              <div className="inline-grid grid-cols-2 gap-4">
                <Button text="Start now" color="primary"></Button>
                <Button text="Contact Sales"></Button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-full w-full object-cover object-center"
          style={{ gridArea: `1/2` }}
          src={hero1}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
