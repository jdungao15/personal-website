import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center mx-auto">
            <div className="hidden md:block">
              <div className="flex items-center bg-white rounded-full shadow-md px-6 py-2">
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/"
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                  }`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/about"
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                  }`}
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/projects"
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                  }`}
                  to="/projects"
                >
                  Projects
                </Link>
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/contact"
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === "/"
                  ? "text-teal-500"
                  : "text-gray-600 hover:text-teal-500"
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === "/about"
                  ? "text-teal-500"
                  : "text-gray-600 hover:text-teal-500"
              }`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === "/projects"
                  ? "text-teal-500"
                  : "text-gray-600 hover:text-teal-500"
              }`}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === "/contact"
                  ? "text-teal-500"
                  : "text-gray-600 hover:text-teal-500"
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
