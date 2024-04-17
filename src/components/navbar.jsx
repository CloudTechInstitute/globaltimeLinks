import Image from "next/image";
import React from "react";
import globaltime from "@/assets/globaltime.png";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-start w-full">
      <div className="max-w-[1024px] px-10">
        <div className="flex justify-between items-center py-2">
          <Image src={globaltime} className="w-[15%]" />
          <div className="hidden md:flex gap-12 items-center">
            <a href="/" className="hover:text-yellow-600 hover:font-bold">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-600 hover:font-bold">
              About Us
            </a>
            <a
              href="/services"
              className="hover:text-yellow-600 hover:font-bold"
            >
              Other Services
            </a>
            <a
              href="/join-us"
              className="hover:text-yellow-600 hover:font-bold"
            >
              Join Us
            </a>
            <a href="/contact">
              <Button className="bg-yellow-400 text-black rounded-none w-full hover:bg-[#010C24] hover:text-yellow-400">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
