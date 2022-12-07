import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="bg-white px-3 md:px-10 lg:px-40 py-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-orange-400 pb-10">Projects</h2>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => 
              <ProjectCard 
                key = {index}
                image = {project.image}
                title = {project.title}
                tools = {project.tools}
              />
            )}
        </div>
      </div>

    </div>
  )
}

export default Projects;