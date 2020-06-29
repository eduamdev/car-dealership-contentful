import React from "react";
import {
  Layout,
  Hero,
  ServicesSection,
  TestimonialSection,
  BrandLogoSection,
} from "./../components";

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <BrandLogoSection></BrandLogoSection>
      <ServicesSection></ServicesSection>
      <TestimonialSection></TestimonialSection>
    </Layout>
  );
};

export default Home;
