import React from "react";

const Announcement = () => {
  return (
    <div className="relative w-full h-10 bg-black text-gray-200 border-b border-accents-7 text-center text-sm font-light">
      <div className="h-full flex justify-center items-center space-x-4 max-w-screen-xl mx-auto px-8">
        <span>
          The health and safety of our staff, customers, and community is our
          top priority.
        </span>
        {/* <span>
          Your safety is our top priority.
        </span> */}
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
