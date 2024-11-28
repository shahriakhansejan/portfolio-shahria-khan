import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-orange-950 text-white">
      <footer className="flex items-center gap-4 flex-col md:flex-row justify-between p-4 max-w-7xl mx-auto">
        <aside className="flex gap-1 md:gap-4 flex-col md:flex-row items-center">
            <p>Shahria Khan</p>
        <GoDotFill className="hidden md:block" />
          <a href="tel:+8801725044522" target="_blank">
            +880 1725-044522
          </a>
          <GoDotFill className="hidden md:block" />
          <a href="mailto:shahriakhansejan@gmail.com" target="_blank">
            shahriakhansejan@gmail.com
          </a>
        </aside>
        <nav className="flex gap-4 items-center justify-end">
      <a
        className="text-2xl hover:bg-orange-600 rounded-full p-2"
        href="https://www.linkedin.com/in/shahria-khan-sejan-69401828b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="text-2xl hover:bg-orange-600 rounded-full p-2"
        href="https://github.com/shahriakhansejan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="text-2xl hover:bg-orange-600 rounded-full p-2"
        href="https://facebook.com/shahriakhansejan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare />
      </a>
    </nav>
      </footer>
    </div>
  );
};

export default Footer;
