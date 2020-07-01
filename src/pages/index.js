import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import Featured from "../components/featured";
import Brands from "../components/brands";

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Brands></Brands>
      <Services></Services>
      <Testimonials></Testimonials>
      <Featured></Featured>
    </Layout>
  );
};

export default Home;
