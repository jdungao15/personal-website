import INFO from "../data/user.js";
import Project from "./Project";
const AllProjects = () => {
  console.log(INFO.projects);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {INFO.projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
