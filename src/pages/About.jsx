import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  console.log(location.pathname);
  return <div className="underline">About</div>;
};

export default About;
