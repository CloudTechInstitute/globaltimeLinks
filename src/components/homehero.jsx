import Image from "next/image";
import React from "react";

export const HomeHero = ({ herotext, imageSrc, component, titlesmall }) => {
  return (
    <div className="relative w-full" style={{ height: "90vh" }}>
      <Image
        src={imageSrc}
        alt="banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute h-full w-full top-0 left-0 bg-[#010C24] opacity-75"></div>
      <div className="absolute flex justify-center items-center w-full top-0 bottom-0 text-white">
        <div>
          <div className="flex items-center justify-start gap-4 max-w-[1024px] px-10">
            <div className="h-[2px] w-20 bg-white"></div>
            <p className="text-lg font-regular">{titlesmall}</p>
          </div>
          <div className="max-w-[1024px] px-10 font-black text-4xl md:text-7xl">
            {herotext}
            {component}
          </div>
        </div>
      </div>
    </div>
  );
};
