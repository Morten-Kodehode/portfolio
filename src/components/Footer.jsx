import React from "react";

function Footer() {
  return (
    <div className="font-lato flex flex-col justify-evenly items-center bg-black h-24">
      <h2 className="text-white text-xl">
        Morten <span className="text-orange-400">Johansson</span>
      </h2>
      <div className="text-orange-400">
        <p>&copy; 2023</p>
      </div>
    </div>
  );
}

export default Footer;
