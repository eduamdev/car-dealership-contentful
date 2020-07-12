import React from "react";
import Button from "./button";

const GetStarted = () => {
  return (
    <section className="start">
      <div className="start__wrapper">
        <div className="start__wrapper__container">
          <div className="start__wrapper__container__content">
            <h3 className="start__wrapper__container__content__title">
              Ready to get started?
            </h3>
            <p className="start__wrapper__container__content__subtitle">
              Lorem ipsum dolor sit amet consect adipisicing elit.
            </p>
          </div>
          <div className="start__wrapper__container__button">
            <Button text="Start now" size="lg" color="primary"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
