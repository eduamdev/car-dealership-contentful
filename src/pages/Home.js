import React from "react";
import {
  Layout,
  Hero,
  CarBrands,
  Services,
  Testimonial,
} from "./../components";

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <CarBrands></CarBrands>
      <Services></Services>
      <Testimonial></Testimonial>
    </Layout>
  );
};

export default Home;
