import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 py-4 bg-gray-100 border-t-2 border-gray-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div className="flex flex-wrap justify-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-teal-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-teal-500">
              About
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-teal-500">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-teal-500">
              Contact
            </Link>
          </div>
          <div className="mt-4 md:mt-0 items-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
