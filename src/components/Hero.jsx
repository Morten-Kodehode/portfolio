import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Hero() {
  return (
    <div className="flex justify-center flex-col px-3 md:px-10 lg:px-40 h-screen bg-hero bg-cover bg-center bg-no-repeat bg-black bg-opacity-60 bg-blend-overlay font-lato">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white pb-5">
        Hi, My Name is Morten.
        <br />
        <span className="text-orange-400">
          I am a Front-End Developer who loves to build stuff.
        </span>
      </h1>
      <p className="text-white">
        Keep Scrolling to Explore or
        <a
          href="#projects"
          className="border-solid border-2 border-orange-400 rounded-lg p-2 mx-3 text-orange-400"
        >
          CLICK ME
        </a>
        to jump to the projects.
      </p>
      <aside className="fixed left-0 bottom-0 flex flex-col justify-center items-center gap-y-3 p-2 bg-black w-[50px] rounded-tr-xl border-orange-700 border-2 z-10">
        <BsGithub className="text-orange-700 text-3xl hover:animate-[pulse_1s_infinite]" />
        <BsLinkedin className="text-orange-700 text-3xl hover:animate-[pulse_1s_infinite]" />
      </aside>
    </div>
  );
}

export default Hero;
