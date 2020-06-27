import React from "react";
import { Header, Footer } from "./";
import { motion } from "framer-motion";

const SvgClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="text-accents-7 fill-current w-6"
  >
    <path
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M368 368L144 144M368 144L144 368"
    />
  </svg>
);

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full overflow-auto m-0 p-0"
    >
      <div className="relative w-full h-10 bg-gray-300 border-b border-accents-2 text-center flex justify-center items-center text-sm space-x-4">
        <span>
          The health and safety of our staff, customers, and community is our
          top priority.
        </span>
        <span>Learn More →</span>
        <span className="absolute cursor-pointer" style={{ right: `20px` }}>
          {SvgClose}
        </span>
      </div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </motion.div>
  );
};

export default Layout;
