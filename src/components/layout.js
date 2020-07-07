import React from "react";
import Header from "../components/header";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full overflow-auto m-0 p-0 overflow-x-hidden"
    >
      <Announcement></Announcement>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </motion.div>
  );
};

export default Layout;
