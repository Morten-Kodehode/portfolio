import React from "react";

function Footer() {
  return (
    <div className="font-lato flex flex-col justify-evenly items-center bg-purple-900">
      <h2 className="text-white text-xl mt-12">
        Morten <span className="text-orange-400">Johansson</span>
      </h2>
      <div className="text-orange-400 mb-12">
        <p>&copy; 2023</p>
      </div>
    </div>
  );
}

export default Footer;
