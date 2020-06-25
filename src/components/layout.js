import React from "react";
import { Header, Footer } from "./";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full overflow-auto m-0 p-0"
    >
      <div className="w-full h-10 bg-gray-300 text-center flex justify-center items-center text-sm space-x-4">
        <span>
          The health and safety of our staff, customers, and community is our
          top priority.
        </span>
        <span>Learn More →</span>
      </div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </motion.div>
  );
};

export default Layout;
