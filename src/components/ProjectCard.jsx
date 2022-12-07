import React from "react";

function ProjectCard({ title, image, tools, github, live}) {
  return (
    <div className="border-2 border-orange-400 rounded-md overflow-hidden relative">
      <img src={image} alt="Project Image" className="block w-full h-36 object-cover rounded-t-lg cursor-pointer"/>
      <div  className="overlay absolute inset-0 h-36 w-full opacity-0 hover:opacity-90 bg-purple-900 duration-500 ease-in-out">
        <div className=" text text-orange-400 text-base h-36 flex justify-evenly items-center">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={live} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
      </div>
      <div className="w-full p-4 bg-purple-900">
        <h3 className="text-xl mb-2 font-semibold text-orange-400">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-sm text-white">
          {tools.map((tool, index) => (
            <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-orange-400 rounded-md">
              {tool}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard;