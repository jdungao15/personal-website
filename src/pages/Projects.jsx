import AllProjects from "../components/AllProjects";

const Projects = () => {
  return (
    <section className="py-10">
      <div className="container px-4 w-1/2 mx-auto">
        <header className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-left text-gray-700 mb-6">
            Projects I&apos;ve made from an idea to reality.
          </h2>
          <p className="text-lg text-left text-gray-600 leading-relaxed font-light">
            I&apos;ve worked on a variety of projects over the years, and
            I&apos;m proud of the progress I&apos;ve made. My most proud project
            is Zenkai. If you&apos;re interested in any of the projects
            I&apos;ve made and would like to check out the code or suggest
            improvements or enhancements you might have in mind, please feel
            free to reach out!
          </p>
        </header>
      </div>
      <AllProjects />
    </section>
  );
};

export default Projects;
