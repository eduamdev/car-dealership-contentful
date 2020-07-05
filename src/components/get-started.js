import React from "react";

const GetStarted = () => {
  return (
    <section className="border-t border-b border-accents-7 bg-white">
      <div className="container mx-auto py-12">
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center">
              <h3 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black">
                Be part of our community
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-600 mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-center">
              <button className="w-56 py-4 shadow-md rounded-md bg-red-600 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
