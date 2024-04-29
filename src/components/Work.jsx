import { FaBriefcase } from "react-icons/fa";

const Work = () => {
  return (
    <div className="max-w-sm bg-white border rounded-lg shadow transition duration-300 ease-in-out p-6">
      <h5 className="mb-2 text-lg font-semi tracking-tight text-gray-600 dark:text-white inline-flex items-center">
        <FaBriefcase className="inline-block mr-4 text-gray-500" />
        Work
      </h5>
      <img
        className="rounded-t-lg w-full"
        src="https://img-9gag-fun.9cache.com/photo/aqgYDXR_700bwp.webp"
        alt=""
      />
    </div>
  );
};

export default Work;
