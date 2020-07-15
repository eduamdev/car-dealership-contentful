import React from "react";

const Footer = () => {
  return (
    <div className="bg-accents-8 border-t border-accents-7 text-accents-5">
      <div className="container mx-auto py-16">
        <div className="max-w-screen-xl mx-auto px-8"></div>
        <div className="flex items-center justify-center">
          <ul className="max-w-lg mx-auto inline-flex items-center justify-center text-center text-sm">
            <li className="footer__item">Privacy Policy</li>
            <li className="footer__item">Legal Terms</li>
            <li className="footer__item">FAQ</li>
            <li className="footer__item">Site Map</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
