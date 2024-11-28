import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="min-h-screen bg-red-50">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <span className="text-center">
          <h3 className="text-orange-600 text-lg font-semibold">
            --- My Projects ---
          </h3>
          <h1 className="text-2xl md:text-3xl font-extrabold dark1 uppercase my-1 ">
            Web Development Projects
          </h1>
          <hr className="py-1 w-full md:w-2/3 lg:w-1/2 mx-auto border-2" />
          <p className="font-medium dark2 text-sm w-full md:w-2/3 lg:w-1/2 mx-auto">
            From Web Components and UI/UX animations to ReactJS and NodeJS.
            Check out my latest web software development portfolio projects.
          </p>
        </span>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...projects].reverse().map((project) => (
            <div
            key={project._id}
            className="card card-compact bg-white rounded-none relative transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
          >
            <Link to={`/project-details/${project._id}`}>
              <div className="px-2 py-1 bg-[#323232] flex items-center">
                <span className="flex space-x-1">
                  <div className="w-[10px] h-[10px] bg-red-400 rounded-full"></div>
                  <div className="w-[10px] h-[10px] bg-yellow-400 rounded-full"></div>
                  <div className="w-[10px] h-[10px] bg-green-400 rounded-full"></div>
                </span>
                <h2 className="text-[11px] text-white font-medium mx-auto">
                  {project.name}
                </h2>
              </div>
              <figure>
                <img
                  src={project.img}
                  alt="project_img"
                  className="transition-opacity duration-300 hover:opacity-90"
                />
              </figure>
            </Link>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
