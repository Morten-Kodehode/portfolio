import React from "react";

function Hero() {
  return (
    <div className="flex justify-center flex-col px-3 md:px-10 lg:px-40 h-screen bg-hero bg-cover bg-center bg-no-repeat bg-black bg-opacity-60 bg-blend-overlay font-lato">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white pb-5">Hi, My Name is Morten.
          <br /> 
          <span className="text-orange-400">I am a Fullstack Developer who loves to build stuff.</span>
        </h1>
        <p className="text-white">Keep Scrolling to Explore or
          <a href="#projects" className="border-solid border-2 border-orange-400 rounded-lg p-2 mx-3 text-orange-400">CLICK ME</a> 
          to jump to the projects.</p>
      </div>
  )
}

export default Hero;