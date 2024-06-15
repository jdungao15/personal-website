import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileCsv } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-left text-gray-700 mb-6">
              Get in touch: Ways to contact me.
            </h1>
          </header>
          <div className="flex flex-col lg:flex-row mb-20">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 font-light ">
              <p className="indent-7 leading-loose">
                Thank you for your interest in contacting me. I am always open
                to exploring new opportunities and connecting with professionals
                in my field. I value your feedback, questions, and suggestions,
                as they help me grow and improve. If you have any inquiries or
                would like to discuss potential collaborations, please feel free
                to reach out to me via email at{" "}
                <a
                  className="underline decoration-1 decoration-indigo-500 underline-offset-4 font-normal"
                  href="mailto:johnmiguel.dungao@gmail.com"
                >
                  johnmiguel.dungao@gmail.com
                </a>
                . I am committed to providing prompt and professional responses
                to all correspondence. Thank you for considering me, and I look
                forward to the possibility of working together.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 mt-20">
            <div className="flex flex-col items-start space-y-6">
              <a
                className="cursor-pointer flex items-center"
                href="https://github.com/jdungao15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-4 text-gray-500 text-2xl" />
                <span>Follow on GitHub</span>
              </a>
              <a
                className="cursor-pointer flex items-center"
                href="https://www.linkedin.com/in/johndungao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mr-4 text-gray-500 text-2xl" />
                <span>Follow on LinkedIn</span>
              </a>

              <span className="border-2 w-72  border-gray-300"></span>
              <a
                className="cursor-pointer flex items-center"
                download
                href="../assets/JohnMiguelDungao-resume.pdf"
              >
                <FaFileCsv className="mr-4 text-gray-500 text-2xl" />
                <span>Download Resume</span>
              </a>
              <a
                className="cursor-pointer flex items-center"
                href="mailto:johnmiguel.dungao@gmail.com"
              >
                <FaMailBulk className="mr-4 text-gray-500 text-2xl" />
                <span>mail@johnmiguel.dungao@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
