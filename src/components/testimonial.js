import React from "react";

const Testimonial = () => {
  return (
    <div className="relative bg-accents-1 border-t border-accents-2 text-white">
      <div
        className="absolute bottom-0 left-0 w-64"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4c4c4c 1px, transparent 0)`,
          backgroundSize: `25px 25px`,
          height: `70%`,
        }}
      ></div>
      <div className="container mx-auto pt-12 pb-20">
        <div class="py-12 bg-accents-1">
          <div class="max-w-screen-xl mx-auto px-8">
            <div class="text-center">
              <div class="inline-flex items-center justify-center text-accents-8 fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-12 w-12"
                >
                  <path d="M13 14.725C13 9.584 16.892 4.206 23 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0124 16.021C24 19.203 21.416 21 18.801 21 15.786 21 13 18.695 13 14.725zm-13 0C0 9.584 3.892 4.206 10 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0111 16.021C11 19.203 8.416 21 5.801 21 2.786 21 0 18.695 0 14.725z" />
                </svg>
              </div>
              <p class="mt-12 max-w-2xl text-xl leading-7 text-white mx-auto">
                Vinfy is the best experience I have had when buying a car. I got
                my new car in record time at an unbeatable price. They took care
                of everything.
              </p>
              <div class="inline-flex items-center mt-8">
                <div class="flex-shrink-0 h-10 w-10">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-4">
                  <div class=" leading-5 font-medium text-white text-left">
                    Bernard Lane
                  </div>
                  <div class=" leading-5 text-gray-500">
                    Head of Ocado Technology, Barcelona
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
