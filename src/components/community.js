import React from "react";
import Button from "./button";

const Community = () => {
  return (
    <section className="community">
      <div className="community__wrapper">
        <div className="community__wrapper__container">
          <div className="community__wrapper__container__content">
            <h3 className="community__wrapper__container__content__title">
              Be part of our community
            </h3>
            <p className="community__wrapper__container__content__subtitle">
              Lorem ipsum dolor sit amet consect adipisicing elit.
            </p>
          </div>
          <div className="community__wrapper__container__button">
            <Button text="Get Started" size="lg" color="primary"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
