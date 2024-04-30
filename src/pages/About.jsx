import { useLocation } from "react-router-dom";
import INFO from "../data/user";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileCsv } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
const About = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <main className="flex justify-around">
      <section className="w-5/12">
        <h1 className="text-4xl font-bold text-left text-gray-700">
          I&apos;m John M. Dungao. I live in New Jersey, where I create
          innovative and engaging projects.
        </h1>
        <p className="text-lg mt-10 text-left text-gray-600 leading-relaxed font-light">
          I&apos;ve worked on variety of projects over the years, and I&apos;m
          proud of the progress I&apos;ve made.I&apos;m really into
          problem-solving, making cool stuff with technology, and exploring new
          possibilities. I love tackling challenges and turning them into
          opportunities for growth. Whether it&apos;s coding, finding smart
          solutions, or keeping up with the latest tech trends, I&apos;m super
          enthusiastic about it. I&apos;m always looking for new projects to
          work on, so if you&apos;re interested in collaborating, feel free to
          reach out!
        </p>
        <div className="mt-20">
          <h2 className="text-xl text-center mb-6">
            My Skills and Technologies
          </h2>
          <ul className="grid grid-cols-4 gap-4">
            {INFO.skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <img
                  className="w-6 h-6 mr-2"
                  src={skill.icon}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex flex-col mt-10">
        <img
          className="skew-y-2 h-96 w-96 object-cover rounded-lg shadow-lg "
          src="https://i.pinimg.com/originals/ab/e5/57/abe557b5780fc93e83447ac60987d000.gif"
          alt="Skills Image"
        />
        <div className="flex flex-col ml-5 mt-20 pb-10 space-y-4 border-b-2 border-gray-300 leading-relaxed ">
          <a
            className="cursor-pointer"
            href="https://github.com/jdungao15"
            target="_blank"
          >
            <FaGithub className="inline-block mr-4 text-gray-500" />
            Follow on GitHub
          </a>

          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/johndungao/"
            target="_blank"
          >
            <FaLinkedin className="inline-block mr-4 text-gray-500" />
            Follow on LinkedIn
          </a>
        </div>
        <div className="flex flex-col ml-5 leading-relaxed my-5 space-y-4">
          <a
            className="cursor-pointer"
            download
            href="../assets/johnmiguel.dungao-resume.pdf"
          >
            <FaFileCsv className="inline-block mr-4 text-gray-500" />
            Download Resume
          </a>
          <a
            className="cursor-pointer"
            href="mailto:johnmiguel.dungao@gmail.com"
          >
            <FaMailBulk className="inline-block mr-4 text-gray-500" />
            mail@johnmiguel.dungao@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
