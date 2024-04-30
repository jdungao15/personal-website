import INFO from "../data/user.js";
import Project from "./Project";
import { useLocation, Link } from "react-router-dom";
const AllProjects = () => {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/") {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {INFO.projects.slice(0, 3).map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items- px-4 py-2 text-sm font-medium text-center text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {INFO.projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
