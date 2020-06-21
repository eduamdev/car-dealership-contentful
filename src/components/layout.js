import React from "react";
import { Header, Footer } from "./";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </motion.div>
  );
};

export default Layout;
