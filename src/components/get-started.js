import React from "react";
import Button from "./button";

const GetStarted = () => {
  return (
    <section className="border-t border-b border-accents-7 bg-white">
      <div className="container mx-auto py-24">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center">
            <h3 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black">
              Ready to get started?
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-600 mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Button text="Start now" size="lg" color="primary"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
