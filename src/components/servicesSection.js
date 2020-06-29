import React from "react";
import { Service } from "./";
import { SvgWorld, SvgNoFees, SvgLightning, SvgNotifications } from "./svg";

const ServicesSection = () => {
  return (
    <section className="bg-black border-t border-accents-2">
      <div className="container mx-auto py-12">
        <div class="py-12">
          <div class="max-w-screen-xl mx-auto px-8">
            <div class="text-center">
              <p class="text-base leading-6 text-red-500 font-semibold tracking-wide uppercase">
                Transactions
              </p>
              <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white">
                A better way to send money
              </h3>
              <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>

            <div class="mt-10">
              <ul class="grid grid-cols-2 col-gap-8 row-gap-10">
                <li>
                  <Service
                    icon={SvgWorld}
                    title="Competitive exchange rates"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></Service>
                </li>
                <li class="mt-0">
                  <Service
                    icon={SvgNoFees}
                    title="No hidden fees"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></Service>
                </li>
                <li class="mt-0">
                  <Service
                    icon={SvgLightning}
                    title="Transfers are instant"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></Service>
                </li>
                <li class="mt-0">
                  <Service
                    icon={SvgNotifications}
                    title="Mobile notifications"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                  ></Service>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
