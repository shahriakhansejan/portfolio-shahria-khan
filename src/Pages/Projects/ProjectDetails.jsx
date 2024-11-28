import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosCopy } from "react-icons/io";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const projects = useLoaderData();
  const { id } = useParams();
  const project = projects.find((project) => project._id === id);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {});
  };

  const {
    name,
    live_url,
    client_url,
    server_url,
    img,
    des,
    frameworks,
    admin_email,
    admin_pass,
    user_email,
    user_pass,
  } = project;

  return (
    <div className="min-h-screen py-6 px-3 bg-[#e6e6e6]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-2 dark1">Project Name: {name}</h1>
        <section className="card card-compact bg-white rounded-none relative">
          <div className="px-[10px] py-1 bg-[#323232] flex items-center">
            <span className="flex space-x-1">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </span>
            <h2 className="text-white text-xs font-medium mx-auto">{name}</h2>
          </div>
          <figure>
            <img src={img} alt="project_img" />
          </figure>
        </section>
        <section className="mt-4">
          <div className="flex justify-between">
            <Link to={`${live_url}`} target="_blank">
              <button className="flex items-center gap-2 font-bold text-xs md:text-sm bg-sky-500 text-white px-4 py-2 rounded-lg border-b-4 hover:bg-sky-600 border-black">
                <FaExternalLinkAlt /> Visit
              </button>
            </Link>
            <span className="flex gap-4">
              <Link to={`${client_url}`} target="_blank">
                <button className="flex items-center gap-2 text-sm font-bold bg-[#656565] text-white px-4 py-2 rounded-lg border-b-4 hover:bg-[#555555] border-black">
                  <FaGithub />
                  Client
                </button>
              </Link>
              {
                server_url &&
                <Link to={`${server_url}`} target="_blank">
                <button className="flex items-center gap-2 text-sm font-bold bg-[#656565] text-white px-4 py-2 rounded-lg border-b-4 hover:bg-[#555555] border-black">
                  <FaGithub />
                  Server
                </button>
              </Link>
              }
            </span>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-between">
            {
              admin_email &&
              <span>
              <h3 className="flex items-center font-semibold text-sky-600 gap-2">
                Admin Email:
                <span
                  className="bg-[#151515] text-white text-xs px-2 py-1 font-medium flex items-center gap-2 rounded-md border border-black cursor-pointer hover:bg-gray-700 transition-colors"
                  onClick={() => copyToClipboard(admin_email)}
                >
                  {admin_email}
                  <IoIosCopy className="text-gray-400 hover:text-white transition-colors" />
                </span>
                (Test)
              </h3>
              <h3 className="flex items-center font-semibold text-sky-600 mt-1 gap-2">
                Password:
                <span
                  className="bg-[#151515] ml-5 text-white text-xs px-2 py-1 font-medium flex items-center gap-2 rounded-md border border-black cursor-pointer hover:bg-gray-700 transition-colors"
                  onClick={() => copyToClipboard(admin_pass)}
                >
                  {admin_pass}
                  <IoIosCopy className="text-gray-400 hover:text-white transition-colors" />
                </span>
              </h3>
            </span>
            }
            {
              user_email &&
              <span>
              <h3 className="flex items-center font-semibold text-sky-600 gap-2">
                User Email:
                <span
                  className="bg-[#151515] text-white text-xs px-2 py-1 font-medium flex items-center gap-2 rounded-md border border-black cursor-pointer hover:bg-gray-700 transition-colors"
                  onClick={() => copyToClipboard(user_email)}
                >
                  {user_email}
                  <IoIosCopy className="text-gray-400 hover:text-white transition-colors" />
                </span>
                (Test)
              </h3>
              <h3 className="flex items-center font-semibold text-sky-600 mt-1 gap-2">
                Password:
                <span
                  className="bg-[#151515] ml-2 text-white text-xs px-2 py-1 font-medium flex items-center gap-2 rounded-md border border-black cursor-pointer hover:bg-gray-700 transition-colors"
                  onClick={() => copyToClipboard(user_pass)}
                >
                  {user_pass}
                  <IoIosCopy className="text-gray-400 hover:text-white transition-colors" />
                </span>
              </h3>
            </span>
            }
          </div>
        </section>
        <section>
          <div className="mt-8">
          <h1 className="text-2xl my-1 font-bold text-orange-600 underline">About This Project:</h1>
          <p className="text-sm font-medium dark2 text-justify">{des}</p>
          </div>
            <div className="mt-8">
              <h1 className="text-2xl my-1 font-bold text-orange-600 underline">Project's Tech Stack:</h1>
              <ul>
                {
                 frameworks.map((framework,idx) => 
                 <li className="dark2 font-medium ml-2 italic my-1 flex items-center gap-2" key={idx}><GoDotFill className="text-green-600"/>  {framework}</li>
                )}
              </ul>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;
