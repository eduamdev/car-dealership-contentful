import React from "react";

const TestimonialItem = ({ quote, author, align = "left" }) => {
  const { photo, name, position } = author;

  const justifyClasses = {
    left: `justify-start`,
    center: `justify-center`,
    right: `justify-end`,
  };

  const textAlignClasses = {
    left: `text-left`,
    center: `text-center`,
    right: `text-right`,
  };

  const marginClasses = {
    left: `mr-auto`,
    center: `mx-auto`,
    right: `ml-auto`,
  };

  const justify = justifyClasses[align];
  const textAlign = textAlignClasses[align];
  const margin = marginClasses[align];

  return (
    <div className={`max-w-2xl ${textAlign} ${margin}`}>
      <div
        className={`flex items-center ${justify} text-accents-8 fill-current`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12"
        >
          <path d="M13 14.725C13 9.584 16.892 4.206 23 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0124 16.021C24 19.203 21.416 21 18.801 21 15.786 21 13 18.695 13 14.725zm-13 0C0 9.584 3.892 4.206 10 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0111 16.021C11 19.203 8.416 21 5.801 21 2.786 21 0 18.695 0 14.725z" />
        </svg>
      </div>
      <p className="mt-6 text-xl leading-7 text-white">{quote}</p>
      <div className="inline-flex items-center mt-8">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={photo} alt="" />
        </div>
        <div className="ml-4">
          <div className=" leading-5 font-medium text-white">{name}</div>
          <div className=" leading-5 text-gray-500">{position}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative bg-accents-1">
      <div
        className="absolute bottom-0 left-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #565656 1px, transparent 0)`,
          backgroundSize: `25px 25px`,
          height: `20rem`,
          width: `40rem`,
        }}
      ></div>
      <div
        className="absolute top-0 right-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #565656 1px, transparent 0)`,
          backgroundSize: `25px 25px`,
          height: `20rem`,
          width: `40rem`,
        }}
      ></div>
      <div className="relative container mx-auto pt-12 pb-20">
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center">
              <h3 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white">
                What our costumers have to say
              </h3>
            </div>
          </div>
          <div className="grid gap-3 mt-16">
            <TestimonialItem
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra."
              author={{
                name: "Bernard Lane",
                position: "Head of Ocado Technology, Barcelona",
                photo:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              }}
            ></TestimonialItem>
            <TestimonialItem
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra."
              author={{
                name: "Bernard Lane",
                position: "Head of Ocado Technology, Barcelona",
                photo:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              }}
              align="right"
            ></TestimonialItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
