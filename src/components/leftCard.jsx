import Image from "next/image";
import React from "react";

export const CardLeft = ({
  titlesmall,
  imageSrc,
  titlebig,
  desctext,
  component,
}) => {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className="md:flex justify-between items-center gap-6 max-w-[1024px] px-10">
        <div className="mb-4">
          <div className="flex justify-start items-center gap-4 mb-3">
            <div className="h-[2px] w-20 bg-black"></div>
            <p className="text-sm uppercase">{titlesmall}</p>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            {titlebig}
          </p>
          <p className="mb-5">{desctext}</p>
          {component}
        </div>
        <Image src={imageSrc} alt="sideImage" className="w-full" />
      </div>
    </div>
  );
};
