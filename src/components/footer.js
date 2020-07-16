import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accents-8 text-black">
      <div className="container mx-auto py-10">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex items-center justify-center">
            <ul className="max-w-lg mx-auto inline-flex items-center justify-center text-center text-base font-medium">
              <li className="footer__item">Privacy Policy</li>
              <li className="footer__item">Legal Terms</li>
              <li className="footer__item">FAQ</li>
              <li className="footer__item">Site Map</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-accents-7">
        <div className="container mx-auto py-4">
          <div className="max-w-screen-xl mx-auto px-8 text-center">
            <span className="text-xs tracking-wide">
              This site is designed & developed by{" "}
              <a
                href="https://github.com/edroamz/"
                className="underline hover:no-underline"
              >
                Eduardo R. Ambriz
              </a>
              . You can find the repository{" "}
              <a
                href="https://github.com/edroamz/car-dealership-contentful"
                className="underline hover:no-underline"
              >
                here
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
