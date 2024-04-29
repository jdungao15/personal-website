import { TypeAnimation } from "react-type-animation";
const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hello there! 👋",
        1000,
        "Hello there! 👋 John Dungao, at your service.",
        1000,
        "Hello there! 👋 John Dungao, at your service. Fullstack Developer by day, AWS Cloud Practitioner by night.",
        1000,
        "Hello there! 👋 John Dungao, at your service. Fullstack Developer by day, AWS Cloud Practitioner by night. 🦸‍♂️💻☁️",
        1000,
        "Hello there! 👋 John Dungao, at your service. Fullstack Developer by day, AWS Cloud Practitioner by night. 🦸‍♂️💻☁️ Let's build something amazing together!",
        () => {
          console.log("Sequence completed. Let the coding adventure begin!");
        },
      ]}
      wrapper="span"
      cursor={true}
      style={{
        fontSize: "2em",
        display: "inline-block",
        fontWeight: "400",
        color: "#374151",
      }}
    />
  );
};

export default TypingAnimation;
