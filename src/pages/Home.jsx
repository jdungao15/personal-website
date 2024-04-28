import avatar from "../assets/avatar.png";
import TypingAnimation from "../components/TypingAnimation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between mt-10">
      <div className="w-full md:w-1/4 flex justify-center items-center border-teal-300 border-2 rounded-lg skew-y-3 p-2 mb-8 md:mb-0 md:order-2">
        <img src={avatar} alt="avatar" className="mx-auto" />
      </div>
      <div className="w-full md:w-1/2 space-y-10 md:order-1">
        <TypingAnimation />
        <header className="text-4xl md:text-6xl"></header>
        <p className="text-lg text-left font-light leading-loose text-gray-600">
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
  );
};

export default Home;
