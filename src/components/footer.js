import React from "react";

const Footer = () => {
  return (
    <div className="bg-accents-1 border-t border-accents-2 text-accents-6">
      <div className="container mx-auto pt-12 pb-16 flex items-center justify-center">
        <ul className="h-12 max-w-lg mx-auto inline-grid grid-cols-4 items-center justify-center text-center text-sm">
          <li className="footer-item">Terms</li>
          <li className="footer-item">GDPR</li>
          <li className="footer-item">Privacy</li>
          <li className="footer-item">DMCA</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
