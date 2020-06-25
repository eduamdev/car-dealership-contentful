import React from "react";
import hero from "../images/hero.jpg";
import hero2 from "../images/hero_2.jpg";
import hero3 from "../images/hero_3.jpg";
import hero4 from "../images/hero_4.jpg";
import hero5 from "../images/hero_5.jpg";

const Hero = () => {
  return (
    <div className="">
      <img
        className="w-full object-cover object-bottom"
        style={{ height: `32rem` }}
        src={hero4}
      ></img>
    </div>
  );
};

export default Hero;
