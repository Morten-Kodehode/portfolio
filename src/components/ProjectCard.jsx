function ProjectCard({ title, image, tools}) {
  return (
    <div className="border-2 border-orange-400 rounded-md overflow-hidden">
      <img src={image} alt="Project Image" className="w-full h-36 object-cover rounded-t-lg"/>
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