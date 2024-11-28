import Projects from "../Projects/Projects";
import Banner from "./Banner";
import About from "../About/About"
import Contact from "../Contact/Contact";



const Home = () => {
  return (
    <div className="min-h-screen">
        <Banner></Banner>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
    </div>
  );
};

export default Home;
