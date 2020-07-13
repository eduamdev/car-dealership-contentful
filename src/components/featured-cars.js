import React from "react";

const FeaturedCars = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-12">
        <div className="pt-12">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center">
              <h3 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black">
                The most searched cars
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-between py-12 ">
          <div>
            <div className="h-56 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="leading-5 pt-3 pb-4 text-black">
              <h4 className="">Tesla Model 3</h4>
              <p className=" text-primary font-extrabold tracking-wide mt-2">
                $20,543
              </p>
            </div>
          </div>
          <div>
            <div className="h-56 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="leading-5 pt-3 pb-4 text-black">
              <h4 className="">Tesla Model 3</h4>
              <p className=" text-primary font-extrabold tracking-wide mt-2">
                $20,543
              </p>
            </div>
          </div>
          <div>
            <div className="h-56 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="leading-5 pt-3 pb-4 text-black">
              <h4 className="">Tesla Model 3</h4>
              <p className=" text-primary font-extrabold tracking-wide mt-2">
                $20,543
              </p>
            </div>
          </div>
          <div>
            <div className="h-56 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="leading-5 pt-3 pb-4 text-black">
              <h4 className="">Tesla Model 3</h4>
              <p className=" text-primary font-extrabold tracking-wide leading-5 mt-2">
                $20,543
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
