import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";

const LoadingOverlay = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div
      className={`fixed inset-0 bg-hero bg-cover bg-center bg-no-repeat bg-black bg-opacity-60 bg-blend-overlay z-50 flex justify-center items-center overflow-hidden transition-opacity ${
        hidden ? "hidden" : "opacity-100"
      }`}
    >
      <div>
        <HashLoader
          css={override}
          size={50}
          color={"#FB923C"}
          loading={true}
          speedMultiplier={0.5}
        />
        <h1 className="text-orange-400 font-lato text-xl animate-[pulse_1.3s_ease-in-out_infinite] pt-[25px]">
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default LoadingOverlay;
