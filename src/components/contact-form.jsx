import { Hero } from "@/components/hero";
import contactImg from "@/assets/contact.png";
import { Button } from "@/components/ui/button";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaMailBulk } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Input } from "./ui/input";

export default function ContactForm() {
  return (
    <div className="w-full flex justify-center px-10 py-10">
      <div className="max-w-[1024px] lg:flex justify-start gap-16">
        <div className="w-full lg:w-[26%]">
          <p className="font-bold text-2xl  text-left mb-8">
            Contact Information
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Call us to our number below or send us an email regarding any issue
            or subject. We will respond within 24hrs
          </p>
          <div className="flex items-center justify-start gap-4 mb-8">
            <IoLocationSharp className="text-yellow-500 text-5xl md:text-3xl lg:text-6xl" />
            <p>13 Dacre Crescent Aveley, South Ockendon Essex RM15 4TP</p>
          </div>
          <div className="flex items-center justify-start gap-4 mb-8">
            <FaPhoneVolume className="text-yellow-500 text-2xl" />
            <p>
              +44 7450 947549 <br />
              +44 7447194961 <br />
              07366861071
            </p>
          </div>
          <div className="flex items-center justify-start gap-4 mb-8">
            <FaMailBulk className="text-yellow-500 text-2xl" />
            <p>info@globaltimelinks.co.uk</p>
          </div>
        </div>
        <div className="w-full lg:w-[74%]">
          <div className="font-bold text-2xl text-left mb-8">
            Leave your message
          </div>
          <div className="">
            <form>
              <div className="md:flex justify-between gap-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="your name"
                />
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="phone number"
                />
              </div>
              <div className="md:flex justify-between gap-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="email address"
                />
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="subject"
                />
              </div>
              <div>
                <textarea
                  rows={10}
                  placeholder="message"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4 resize-none"
                ></textarea>
              </div>
              <div>
                <Button className="bg-[#010C24] text-yellow-400 w-full md:w-[50%] rounded-none hover:bg-yellow-400 hover:text-[#010C24]">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
