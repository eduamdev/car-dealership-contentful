import React from "react";

const Announcement = () => {
  return (
    <div className="w-full h-10 bg-black text-gray-200 border-b border-accents-7 text-center text-sm">
      <div
        className="relative h-full flex justify-center items-center space-x-4 mx-auto px-8"
        style={{ maxWidth: `1920px` }}
      >
        <span className="hidden md:block">
          The health and safety of our staff, customers, and community is our
          top priority.
        </span>
        <span className="md:hidden">Your safety is our top priority.</span>
        <span>Learn More →</span>
        <span className="absolute cursor-pointer" style={{ right: `20px` }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="text-gray-200 stroke-current w-6"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Announcement;
