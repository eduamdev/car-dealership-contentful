import React from "react";
import hero from "../images/hero.jpg";
import hero4 from "../images/hero_4.jpg";
import hero10 from "../images/hero_10.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__grid">
        <div className="hero__grid__wrapper">
          <div className="hero__grid__wrapper__content">
            <div className="max-w-xl">
              <h1 className="hero__grid__wrapper__content__title">
                Best way to find your{" "}
                <span className="hero__grid__wrapper__content__title--highlight">
                  right car
                </span>
              </h1>
              <p className="hero__grid__wrapper__content__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus mattis rhoncus urna neque viverra justo.
              </p>
              <div className="hero__grid__wrapper__content__buttons">
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
        <img className="hero__img" src={hero10}></img>
      </div>
    </div>
  );
};

export default Hero;
