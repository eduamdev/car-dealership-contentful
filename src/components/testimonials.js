import React from "react";

const TestimonialItem = ({ quote, author, align = "left" }) => {
  const { photo, name, position } = author;

  const marginClasses = {
    left: `mr-auto`,
    center: `mx-auto`,
    right: `ml-auto`,
  };

  const margin = marginClasses[align];

  return (
    <div className={`max-w-2xl ${margin}`}>
      <p className="quote relative mt-3 text-lg leading-7 text-white italic font-thin tracking-wide z-10">
        {quote}
      </p>
      <div className="inline-flex items-center mt-8">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={photo} alt="" />
        </div>
        <div className="ml-4">
          <div className=" leading-5 font-medium text-white text-left">
            {name}
          </div>
          <div className=" leading-5 text-gray-500 text-left">{position}</div>
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
