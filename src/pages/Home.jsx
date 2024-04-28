import avatar from "../assets/avatar.png";
import TypingAnimation from "../components/TypingAnimation";
const Home = () => {
  return (
    <section className="flex justify-between mt-10">
      <div className="w-1/2 space-y-10">
        <TypingAnimation />
        <header className="text-6xl"></header>
        <p className="text-lg text-left font-light leading-loose ">
          I am a full-stack web developer with a passion for building web
          applications. I have experience in building web applications using
          React, Node.js, Express, and PostgreSQL. I recently graduated from
          Fullstack Academy as a Web Developer, and I am currently pursuing a
          certified AWS cloud practioner. I am passionate about creating a
          high-quality code that follow best practices and standards. I am
          always eager to learn new technologies and improve my skills.
        </p>
      </div>
      <div className="w-1/4 flex justify-center items-center border-teal-300 border-2 rounded-lg skew-y-3 p-2">
        <img src={avatar} alt="avatar" className=" mx-auto" />
      </div>
      {/* <div>
        <h1 className="text-6xl">Hello, I'm John Doe</h1>
        <p className="text-lg">
          I am a full-stack web developer with a passion for building web
          applications. I have experience in building web applications using
          React, Node.js, Express, and PostgreSQL. I recently graduated from
          Fullstack Academy as a Web Developer, and I am currently pursuing a
          certified AWS cloud practioner. I am passionate about creating a
          high-quality code that follow best practices and standards. I am
          always eager to learn new technologies and improve my skills.
        </p>
      </div> */}
    </section>
  );
};

export default Home;
