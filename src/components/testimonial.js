import React from "react";

const Testimonial = ({ quote, author }) => {
  const { photo, name, position } = author;

  return (
    <div className="text-center">
      <div class="flex items-center justify-center text-accents-8 fill-current">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12"
        >
          <path d="M13 14.725C13 9.584 16.892 4.206 23 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0124 16.021C24 19.203 21.416 21 18.801 21 15.786 21 13 18.695 13 14.725zm-13 0C0 9.584 3.892 4.206 10 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0111 16.021C11 19.203 8.416 21 5.801 21 2.786 21 0 18.695 0 14.725z" />
        </svg>
      </div>
      <p class="mt-12 max-w-2xl text-xl leading-7 text-white mx-auto">
        {quote}
      </p>
      <div class="inline-flex items-center mt-8">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" src={photo} alt="" />
        </div>
        <div class="ml-4">
          <div class=" leading-5 font-medium text-white text-left">{name}</div>
          <div class=" leading-5 text-gray-500">{position}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
