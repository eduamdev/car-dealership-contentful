import React from "react";
import Button from "./button";
import hero from "../img/hero.jpg";

const Hero = () => {
  return (
    <div className="relative bg-accents-8" style={{ height: `36rem` }}>
      <div
        className="grid h-full col-gap-12 lg:col-gap-24"
        style={{ gridTemplateColumns: `minmax(42rem, 1fr) 1fr` }}
      >
        <div className="absolute w-full h-full">
          <div className="container h-full flex flex-col items-start justify-center max-w-screen-xl mx-auto px-8">
            <div className="max-w-xl space-y-8">
              <h1 className="text-black text-6xl font-bold inline-block tracking-tight leading-tight">
                Easiest way to find your{" "}
                <span className="text-primary">right car</span>
              </h1>
              <p className="text-lg leading-7 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus mattis rhoncus urna neque viverra justo.
              </p>
              <div className="inline-grid grid-cols-2 gap-4 text-lg">
                <Button text="Start now" color="primary" size="lg"></Button>
                <Button text="Contact Sales" size="lg"></Button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-full w-full object-cover object-center"
          style={{ gridArea: `1/2`, maxWidth: `845px` }}
          src={hero}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
