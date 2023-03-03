import React from "react";

function About() {
  const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Tailwind CSS" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Figma" },
  ];

  return (
    <div className="bg-purple-900 font-lato px-3 md:px-10 lg:px-40 py-12 md:grid grid-cols-2">
      <div>
        <h2 className="text-3xl py-12 text-orange-400">A Little About Me</h2>
        <p className="text-xl text-orange-400 mb-5">/* The Beginning /</p>
        <p className="text-white mb-5">
          Hi, I'm Morten. I'm 36 winters old. I have been interested in STEM
          fields from a young age, so naturally I wandered head-first into
          computers and been fascinated with them since.
        </p>
        <p className="text-xl text-orange-400 mb-5">/ The Present */</p>
        <p className="text-white">
          Currently I am studying FrontEnd Development with a focus on the MERN
          stack. I joined Kodehode in September 2022 for a six-month bootcamp
          course with accompanying six-month internship at a company. I have
          been self-teaching since 2020 before starting the course.
        </p>
        <p>&nbsp;</p>
        <p className="text-white mb-5">
          In my spare time you can usually find me gaming, DnDing, or learning
          Blender and Unreal Engine 5.
        </p>
        <p className="text-xl text-orange-400 mb-5">/* The Future */</p>
        <p className="text-white mb">
          Hopefully working for a company as a software engineer/web developer.
        </p>
      </div>
      <div className="flex flex-col max-w-3xl lg:ml-12">
        <h2 className="text-2xl py-12 text-orange-400">My Toolbox</h2>
        <aside className="text-white grid-cols-2 lg:grid-cols-3 grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="m-2 border-orange-400 border-solid border-2 rounded-md p-2"
            >
              <div className="text-center">
                <span className="text-white font-bold">{skill.name}</span>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

export default About;
