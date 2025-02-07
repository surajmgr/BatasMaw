import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#125EA9] py-12 text-white">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
        {/* Corporate Office Section */}
        <div>
          <h4 className="mb-4 text-2xl font-semibold">Corporate Office</h4>
          <p className="text-lg">Tangal</p>
          <p className="mt-2 text-lg">+1-416-8241228</p>
          <p className="mt-2 text-lg">info@email.com</p>
        </div>

        {/* Warehouse Section */}
        <div>
          <h4 className="mb-4 text-2xl font-semibold">Warehouse</h4>
          <p className="text-lg">Birtamod</p>
          <p className="mt-2 text-lg">+1-416-8241228</p>
          <p className="mt-2 text-lg">info@email.com</p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h4 className="mb-4 text-2xl font-semibold">Useful Links</h4>
          <ul className="space-y-3 text-white">
            <li className="cursor-pointer text-lg hover:underline">About Us</li>
            <li className="cursor-pointer text-lg hover:underline">
              Contact Us
            </li>
            <li className="cursor-pointer text-lg hover:underline">Our Crew</li>
            <li className="cursor-pointer text-lg hover:underline">
              FAQ Pages
            </li>
            <li className="cursor-pointer text-lg hover:underline">
              Free Quote
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-2 p-10 border-t border-white pt-4 text-center">
        {/* Logo, Copyright, and Affiliated Company Logo in a row */}
        <div className="flex items-center justify-between space-x-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="assets/images/logo/bataWhite.png"
              alt="Batas Logo"
              className="h-12"
            />
          </div>

          {/* Copyright */}
          <div className="flex items-center">
            <p className="text-lg">© 2025 BATAS MAW. All Rights Reserved.</p>
          </div>

          {/* Affiliated Company Logo */}
          <div className="flex items-center">
            <img
              src="/assets/images/misc/eicher2.png"
              alt="Affiliated Company Logo"
              className="h-12"
            />
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
