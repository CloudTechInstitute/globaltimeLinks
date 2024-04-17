import Image from "next/image";
import React from "react";

export const MiddleUI = ({ herotext, herosubtext, imageSrc, component }) => {
  return (
    <div className="relative w-full" style={{ height: "100vh" }}>
      <Image
        src={imageSrc}
        alt="banner"
        className="w-fit h-full object-cover"
      />
      <div className="absolute h-full w-full top-0 left-0 bg-[#010C24] opacity-75"></div>
      <div className="absolute flex justify-center items-center w-full top-0 bottom-0 text-lg xl:text-2xl 2xl:text-4xl text-white text-center">
        <div className="max-w-[1024px] px-10">{herotext}</div>
      </div>
    </div>
  );
};
