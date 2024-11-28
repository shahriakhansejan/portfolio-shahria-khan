import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Message from "../Message/Message";

const Contact = () => {
  return (
    <div className="px-6 py-12 min-h-screen bg-[#e6e6e6]">
      <section className="max-w-6xl bg-orange-50 rounded p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 md:gap-6 mx-auto">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold dark1">Let's Connect :</h1>
          <p className="dark2 w-full lg:w-2/3 text-sm text-justify  my-3 font-medium">
            If you have any questions, project inquiries, or collaboration
            opportunities, feel free to reach out! I’m always open to connecting
            with like-minded individuals and exploring new ideas. You can
            contact me via email, phone, or through my social media profiles.
            Let’s work together to create something amazing!
          </p>
          <div className="flex gap-1 text-3xl">
            <a
              className="text-blue-600 p-3 hover:bg-white rounded-full"
              href="https://www.linkedin.com/in/shahria-khan-sejan-69401828b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-[#323232] p-3 hover:bg-white rounded-full"
              href="https://github.com/shahriakhansejan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />{" "}
            </a>
            <a
              className="text-blue-600 p-3 hover:bg-white rounded-full"
              href="https://facebook.com/shahriakhansejan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              className="text-green-600 p-3 hover:bg-white rounded-full"
              href="https://wa.me/+8801725044522"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />{" "}
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-3 dark1">Let's Contact :</h1>
            <Message></Message>
        </div>
      </section>
    </div>
  );
};

export default Contact;
