import Image from "next/image";
import React from "react";
import globaltime from "@/assets/globaltime.png";

export const Footer = ({ herotext, imageSrc }) => {
  return (
    <div className="px-10 w-full bg-[#010C24] opacity-90">
      {/* <Image
        src={imageSrc}
        alt="banner"
        className="w-full h-full object-cover"
      /> */}
      <div className=" h-full w-full top-0 left-0"></div>
      <div className=" flex justify-center items-start py-12 w-full top-0 bottom-0 text-white">
        <div className="max-w-[1024px]">
          <div className="md:flex justify-between gap-10 items-start">
            <div className="text-center md:text-left md:w-[25%]">
              <div className="flex justify-center">
                <Image src={globaltime} className="w-[60%] md:w-full mb-4 md:mb-10" />
              </div>
              <p className="">
                GlobalTime Links has built a strong network enabling us to
                maintain successful relationships and ensuring a high level of
                service.
              </p>
            </div>
            <div className="text-center md:text-left md:w-[25%]">
              <p className="text-yellow-400 font-bold text-xl mb-2 md:mb-5">
                Useful Links
              </p>

              <a href="/" className="flex flex-col mb-0 md:mb-4">
                Home
              </a>
              <a href="/about" className="flex flex-col mb-0 md:mb-4">
                About Us
              </a>
              <a href="/contact" className="flex flex-col mb-0 md:mb-4">
                Contact Us
              </a>
              <a href="/join-us" className="flex flex-col mb-0 md:mb-4">
                Join Us
              </a>
            </div>
            <div className="text-center md:text-left md:w-[25%]">
              <p className="text-yellow-400 font-bold text-xl mb-0 md:mb-5">
                Other Services
              </p>
              <a href="/" className="flex flex-col mb-0 md:mb-4">
                Home
              </a>
              <a href="/about" className="flex flex-col mb-0 md:mb-4">
                About Us
              </a>
              <a href="/contact" className="flex flex-col mb-0 md:mb-4">
                Contact Us
              </a>
              <a href="/login" className="flex flex-col mb-0 md:mb-4">
                Login
              </a>
              <a href="/register" className="flex flex-col mb-0 md:mb-4">
                Registration
              </a>
            </div>
            <div className="text-center md:text-left md:w-[25%]">
              <p className="text-yellow-400 font-bold text-xl mb-0 md:mb-5">
                Contact Us
              </p>
              <p className="mb-0 md:mb-5">
                13 Dacre Crescent Aveley, South Ockendon Essex RM15 4TP
              </p>
              <p className="mb-0 md:mb-5">
                +44 7450 947549 <br />
                +44 7447194961 <br />
                07366861071
              </p>
              <p>info@globaltimelinks.co.uk</p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-yellow-400 mb-5 mt-16 md:mt-24"></div>
          <p className="text-center text-white">
            (c) 2024 Copyright | GlobalTime Links |  All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
