import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-purple-900 py-16 px-3 md:px-10 lg:px-40 flex flex-col items-center font-lato">
      <div className="max-w-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-orange-400 mb-8 text-center">
          Get In Touch
        </h1>
        <p className="text-white text-center">
          Thank you for considering me for your web development needs. Let's
          collaborate to create something that truly represents your brand. Drop
          me a message below to get started!
        </p>
      </div>
      <button className="mt-3 py-2 px-2 border-2 border-solid border-orange-400 rounded-md text-white hover:animate-[pulse_1s_infinite] flex flex-row items-center gap-2">
        <a href="mailto:morten.johansson@outlook.com">Let's Chat</a>
        <AiOutlineMail className="text-2xl" />
      </button>
    </div>
  );
};

export default Contact;
