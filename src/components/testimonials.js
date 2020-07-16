import React from "react";

// NEED REWORK

const TestimonialItem = ({ area, quote, author }) => {
  const { photo, name, position } = author;

  return (
    <div style={{ gridArea: `${area}` }}>
      <p className="quote relative mt-3 text-xl leading-7 text-gray-700 italic font-serif tracking-normal z-10">
        {quote}
      </p>
      <div className="inline-flex items-center mt-8">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={photo} alt="" />
        </div>
        <div className="ml-4">
          <div className=" leading-5 font-medium text-black text-left mb-1">
            {name}
          </div>
          <div className=" leading-5 font-medium text-left text-primary">
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative bg-white">
      <div
        className="absolute bottom-0 left-0"
        style={{
          background: `linear-gradient(90deg, #fff 22px, transparent 1%) center, linear-gradient(#fff 22px, transparent 1%) center, #cbd5e0`,
          backgroundSize: `25px 25px`,
          height: `15rem`,
          width: `35rem`,
        }}
      ></div>
      <div
        className="absolute top-0 right-0"
        style={{
          background: `linear-gradient(90deg, #fff 22px, transparent 1%) center, linear-gradient(#fff 22px, transparent 1%) center, #cbd5e0`,
          backgroundSize: `25px 25px`,
          height: `15rem`,
          width: `35rem`,
        }}
      ></div>
      <div className="relative container mx-auto pt-12 pb-20">
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center">
              <h3 className="text-5xl leading-8 font-bold tracking-tight text-black">
                What our costumers have to say
              </h3>
            </div>
          </div>
          <div
            className="grid gap-3 mt-16 max-w-screen-xl mx-auto px-8"
            style={{
              gridTemplateAreas: `
              "quote1 ."
              ". quote2"
              `,
            }}
          >
            <TestimonialItem
              area="quote1"
              quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra."'
              author={{
                name: "Bernard Lane",
                position: "Head of Ocado Technology, Barcelona",
                photo:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              }}
            ></TestimonialItem>
            <TestimonialItem
              area="quote2"
              quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra."'
              author={{
                name: "Bernard Lane",
                position: "Head of Ocado Technology, Barcelona",
                photo:
                  "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
