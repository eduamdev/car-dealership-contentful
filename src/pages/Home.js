import React from "react";
import {
  Layout,
  Hero,
  ServicesSection,
  TestimonialSection,
  FeaturedSection,
  BrandLogoSection,
} from "./../components";

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <BrandLogoSection></BrandLogoSection>
      <ServicesSection></ServicesSection>
      <TestimonialSection></TestimonialSection>
      <FeaturedSection></FeaturedSection>
    </Layout>
  );
};

export default Home;
