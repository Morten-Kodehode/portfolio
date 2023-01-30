import React from "react";

function About() {
  return (
    <div className="bg-purple-900 font-lato px-3 md:px-10 lg:px-40 py-12 md:grid grid-cols-2">
      <div>
        <h2 className="text-3xl py-12 text-orange-400">A Little About Me</h2>
        <p className="text-xl text-orange-400 mb-5">/* The Beginning */</p>
        <p className="text-white mb-5">
          Hi, I'm Morten. I'm 36 winters old. I have been interested in STEM
          fields from a young age, so naturally I wandered head-first into
          computers and been fascinated with them since.
        </p>
        <p className="text-xl text-orange-400 mb-5">/* The Present */</p>
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
      <div className="flex items-center justify-center mt-12 md:mt-0">
        <img src="/assets/selfie.PNG" alt="picture of myself cartoon" />
      </div>
    </div>
  );
}

export default About;
