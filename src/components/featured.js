import React from "react";

const Featured = () => {
  return (
    <div className="bg-black border-t border-accents-2 text-white">
      <div className="container mx-auto py-12">
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center">
              <h3 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white">
                The most searched cars
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-5 items-center justify-between py-12">
          <div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="pt-6 text-white">
              <h4 className="">Ford Mustang</h4>
              <p className="text-base text-accents-6 tracking-wide mt-3">
                $20,543
              </p>
            </div>
          </div>
          <div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="pt-6 text-white">
              <h4 className="">Ford Mustang</h4>
              <p className="text-base text-accents-6 tracking-wide mt-3">
                $20,543
              </p>
            </div>
          </div>
          <div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="pt-6 text-white">
              <h4 className="">Ford Mustang</h4>
              <p className="text-base text-accents-6 tracking-wide mt-3">
                $20,543
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12 pt-6">
          <a className="inline-block mx-auto border-b-2 border-white bg-transparent text-white text-base tracking-wide">
            Explore all vehicles →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
