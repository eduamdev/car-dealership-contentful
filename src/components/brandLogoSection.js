import React from "react";
import { BrandLogo } from "./";
import {
  SvgTeslaLogo,
  SvgTesla,
  SvgHonda,
  SvgJeep,
  SvgSubaru,
  SvgSuzuki,
  SvgToyota,
  SvgVolkswagen,
} from "./svg";

const BrandLogoSection = () => {
  return (
    <section className="bg-accents-1 py-24">
      <div className="container mx-auto flex items-center justify-between">
        <BrandLogo>
          <div className="mr-1">{SvgTeslaLogo}</div>
          <div>{SvgTesla}</div>
        </BrandLogo>
        <BrandLogo logo={SvgSuzuki}></BrandLogo>
        <BrandLogo logo={SvgHonda}></BrandLogo>
        <BrandLogo logo={SvgSubaru}></BrandLogo>
        <BrandLogo logo={SvgJeep}></BrandLogo>
        <BrandLogo logo={SvgVolkswagen}></BrandLogo>
        <BrandLogo logo={SvgToyota}></BrandLogo>
      </div>
    </section>
  );
};

export default BrandLogoSection;
