import React from "react";

const Service = ({ title, text, icon }) => {
  return (
    <div class="flex">
      <div class="flex-shrink-0">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
          {icon}
        </div>
      </div>
      <div class="ml-4">
        <h4 class="text-lg leading-6 font-medium text-white">{title}</h4>
        <p class="mt-2 text-base leading-6 text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default Service;
