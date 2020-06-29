import React from "react";

const CarBrands = ({ logo, children }) => {
  return (
    <div className="inline-flex items-center justify-between">
      {logo && <div>{logo}</div>}
      {children}
    </div>
  );
};

export default CarBrands;
