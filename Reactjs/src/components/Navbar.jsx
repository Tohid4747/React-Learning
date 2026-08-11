import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-blue-600">My Website</h2>

          <div className="flex gap-6">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
