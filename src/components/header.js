import React from "react";

const Header = () => {
  return (
    <div className="h-16 bg-black">
      <nav className="h-full flex justify-between items-center container mx-auto border-b border-accents-3 text-white">
        <a>Dealership</a>
        <a>Shop</a>
      </nav>
    </div>
  );
};

export default Header;
