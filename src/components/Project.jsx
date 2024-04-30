import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { title, description, image, link, icons } = project;

  const truncate = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + "...";
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow hover:bg-gray-100 transition duration-300 ease-in-out">
      <img
        className="rounded-t-lg hover:scale-105 transition duration-300 ease-in-out"
        src={image}
        alt={title}
      />
      <div className="p-5 space-y-4">
        <h5 className="text-2xl font-semi tracking-tight text-gray-700 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-500 dark:text-gray-400">
          {truncate(description, 150)}
          <Link className="ml-1 hover:text-teal-500" to="/projects">
            read more
          </Link>
        </p>
        <div className="flex flex-col items-center">
          {icons.length > 0 && (
            <div className="flex gap-2 mb-4">
              {icons.map((icon, index) => (
                <img key={index} src={icon} alt="" className="w-6 h-6" />
              ))}
            </div>
          )}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-500 hover:text-teal-500"
          >
            <FaLink className="mr-2" />
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
