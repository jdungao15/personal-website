import INFO from "../data/user";
const Timeline = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 w-1/2">
      {INFO.education.map((education, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {education.date}
          </time>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            {education.title}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
            {education.description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
