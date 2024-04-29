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
    <div className="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-semi tracking-tight text-gray-700 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {truncate(description, 175)}
          <Link className="ml-1 hover:text-teal-500" to="/projects">
            read more
          </Link>
        </p>
        <div className="flex">
          <a
            target="_blank"
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-500 hover:text-gray-600"
          >
            <FaLink className="mr-2" />
            View Project
          </a>
          <div className="flex gap-1 w-6 ml-5">
            {icons.map((icon, index) => (
              <img key={index} src={icon} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
