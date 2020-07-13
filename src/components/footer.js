import React from "react";

const Footer = () => {
  return (
    <div className="bg-accents-8 border-t border-accents-7 text-accents-5">
      <div className="container pt-12 pb-16 flex items-center justify-center max-w-screen-xl mx-auto px-8">
        <ul className="h-12 max-w-lg mx-auto inline-flex items-center justify-center text-center text-sm">
          <li className="footer__item">Privacy Policy</li>
          <li className="footer__item">Legal Terms</li>
          <li className="footer__item">FAQ</li>
          <li className="footer__item">Site Map</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
