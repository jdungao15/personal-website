import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="p-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-4 p-4 sm:rounded-full sm:shadow-lg mx-auto justify-between px-6 max-w-lg">
        <Link
          className={`hover:text-teal-500 text-center ${
            location.pathname === "/" ? "text-teal-500" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`hover:text-teal-500 text-center ${
            location.pathname === "/about" ? "text-teal-500" : ""
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`hover:text-teal-500 text-center ${
            location.pathname === "/projects" ? "text-teal-500" : ""
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`hover:text-teal-500 text-center ${
            location.pathname === "/contact" ? "text-teal-500" : ""
          }`}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
