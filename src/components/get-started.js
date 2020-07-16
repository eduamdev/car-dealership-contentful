import React from "react";
import Button from "./button";

const GetStarted = () => {
  return (
    <section className="bg-gray-700">
      <div className="container mx-auto py-24">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center">
            <h3 className="text-5xl leading-8 font-bold tracking-tight text-white">
              Ready to get started?
            </h3>
            <p className="mt-10 max-w-2xl text-xl leading-7 text-gray-200 mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center text-lg">
            <Button text="Start now" size="lg" color="primary"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
