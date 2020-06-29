import React from "react";
import { Testimonial } from "./";

const BrandLogoSection = () => {
  return (
    <section className="relative bg-black border-t border-accents-2">
      <div
        className="absolute bottom-0 left-0 w-64"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4c4c4c 1px, transparent 0)`,
          backgroundSize: `25px 25px`,
          height: `70%`,
        }}
      ></div>
      <div className="container mx-auto pt-12 pb-20">
        <div class="py-12">
          <div class="max-w-screen-xl mx-auto px-8">
            <Testimonial
              quote="Vinfy is the best experience I have had when buying a car. I got my dream
        car in record time at an unbeatable price. They took care of everything."
              author={{
                name: "Bernard Lane",
                position: "Head of Ocado Technology, Barcelona",
                photo:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              }}
            ></Testimonial>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoSection;
