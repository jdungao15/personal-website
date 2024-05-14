import avatar from "../assets/avatar.jpg";
import TypingAnimation from "../components/TypingAnimation";
import AllProjects from "../components/AllProjects";
import Timeline from "../components/Timeline";
import Work from "../components/Work";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Home = () => {
  return (
    <main className="px-5">
      <section className="flex flex-col lg:flex-row justify-between mt-10">
        <div className="w-full lg:w-[25%] flex justify-center items-center bg-auto  lg:mb-0 lg:order-2">
          <img src={avatar} alt="avatar" className="mx-auto rounded-3xl" />
        </div>
        <div className="w-full lg:w-1/2 space-y-10 lg:order-1">
          <TypingAnimation />
          <p className="text-lg text-left font-light leading-relaxed text-gray-600">
            I am a full-stack web developer with a passion for building web
            applications. I have experience in building web applications using
            React, Node.js, Express, and PostgreSQL. I recently graduated from
            Fullstack Academy as a Web Developer, and I am currently pursuing a
            certified AWS cloud practioner. I am passionate about creating a
            high-quality code that follow best practices and standards. I am
            always eager to learn new technologies and improve my skills.
          </p>
          <div className="flex gap-4 text-3xl text-gray-500">
            <a
              className="hover:text-teal-500"
              href="https://github.com/jdungao15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-teal-500"
              href="https://www.linkedin.com/in/johndungao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-teal-500"
              href="mailto:johnmiguel.dungao@gmail.com"
            >
              <FaMailBulk />
            </a>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <header className="text-2xl text-center">Projects</header>
        <AllProjects />
      </section>
      <section className="mt-20 flex flex-col lg:flex-row justify-between">
        <Timeline />
        <Work />
      </section>
    </main>
  );
};

export default Home;
