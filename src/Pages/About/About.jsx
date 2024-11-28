import { GiCheckMark } from "react-icons/gi";
import aboutImg from "../../assets/Image/about.png";

const About = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-6">
      <div className="max-w-6xl rounded mx-auto gap-6 bg-orange-100 flex flex-col md:flex-row items-center justify-between">
        <section className="w-full pt-8 lg:pt-10 px-8 lg:px-10 md:w-1/2 border-b-2 border-black lg:w-2/5">
          <img className="" src={aboutImg} alt="" />
        </section>
        <section className="w-full p-8 lg:p-10 md:w-1/2 lg:w-3/5">
          <h1 className="text-3xl lg:text-4xl mb-8 font-bold text-orange-600">
            About Me .....
          </h1>
          <h3 className="text-2xl dark1 mt-2 font-bold">
            Hi, I'm Shahria Khan
          </h3>
          <h3 className="text-lg text-purple-600 mb-2 font-semibold">
            Passionate Web Developer
          </h3>

          <p className="text-justify text-xs lg:text-base dark2 font-medium">
            I am a dedicated web developer specializing in the MERN stack. I
            create dynamic, responsive web applications that deliver seamless
            experiences. I completed my graduation at Govt. Titumir College and
            recently finished a web development course with Jhankar Mahbub
            through{" "}
            <span className="text-purple-600 font-semibold">
              Programming Hero.
            </span>{" "}
            I have worked on full-stack projects that showcase my skills in
            React.js and frontend development, and I’m always improving my
            abilities to build scalable and innovative solutions.
          </p>
        </section>
      </div>
      <div className="max-w-6xl mx-auto p-2 mt-6">
        <h2 className="text-3xl font-bold dark1">Personal Information:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 text-green-800 font-medium gap-1 mt-3">
          <li>
            <span className="text-red-700">Name:</span> Shahria Khan
          </li>
          <li>
            <span className="text-red-700">Date of Birth:</span> 25 February,
            2001
          </li>
          <li>
            <span className="text-red-700">Birth Place:</span> Tangail
          </li>
          <li>
            <span className="text-red-700">Marital Status:</span> Single
          </li>
          <li>
            <span className="text-red-700">Religion:</span> Islam
          </li>
          <li>
            <span className="text-red-700">Nationality:</span> Bangladeshi
          </li>
          <li>
            <span className="text-red-700">Phone:</span> <a className="underline" href="tel:+8801725044522" target="_blank">
            +880 1725-044522
          </a>
          </li>
          <li>
            <span className="text-red-700">Email:</span>{" "}
            <a className="underline" href="mailto:shahriakhansejan@gmail.com" target="_blank">shahriakhansejan@gmail.com</a>
          </li>
          <li>
            <span className="text-red-700">For Hire:</span> Available
          </li>
          <li>
            <span className="text-red-700">Address:</span> GA#75, Hazaribari,
            Mohakhali, Banani, Dhakha-1212
          </li>
        </ul>
      </div>
      <div className="max-w-6xl mx-auto p-2 mt-10">
        <h2 className="text-3xl font-bold dark1">Look What Can I Do:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 text-green-800 font-medium gap-1 mt-3">
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Web development
            </li>
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Build user
              interfaces
            </li>
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Code and deploy
              application
            </li>
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Create and test
              applications for websites
            </li>
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Maintain and
              update websites
            </li>
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Monitor website
              traffic
            </li>
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Backend and
              Frontend development
            </li>
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Create and
              manage the database
            </li>
            <li className="dark2 flex gap-2">
              <GiCheckMark className="text-green-600 text-xl" /> Stay up-to-date
              on technology
            </li>
          </ul>
      </div>
    </div>
  );
};

export default About;
