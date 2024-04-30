import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="bg-gray-50 min-h-screen w-full md:w-[75%] mx-auto pt-3  border-x flex flex-col justify-between">
        <Navbar />
        <div className="container mx-auto pt-8 px-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
