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

export default function JoinForm() {
  return (
    <div className="w-full flex justify-center px-10 py-10">
      <div className="max-w-[1024px] md:flex justify-start gap-16">
        <div className="w-full">
          <div className="">
            <p className="text-left mb-8">
              Please complete the following form below and press submit to
              register your details. A member of staff will be in contact with
              you as soon as possible to speak with you about the options
              available.
            </p>
            <p className="italic mb-4">
              Fields marked as <span className="font-bold">(required)</span> are
              compulsory, and your information is held securely and privately.
            </p>
          </div>
          <div className="">
            <form>
              <div className="md:flex justify-between gap-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="first name (required)"
                />
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="last name (required)"
                />
              </div>
              <div className="md:flex justify-between gap-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="country of passport (required)"
                />
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="address (required)"
                />
              </div>
              <div className="md:flex justify-between gap-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="postcode (required)"
                />
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="mobile number (required)"
                />
              </div>
              <div className="md:flex justify-between gap-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="email"
                />
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="home telephone number"
                />
              </div>
              <div className="md:flex justify-between gap-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="trade / profession (required) "
                />
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="experience (years / months) (required) "
                />
              </div>
              <div className="md:flex justify-between gap-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="CIS/UTR Number (required)"
                />
                <input
                  type="text"
                  className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                  placeholder="National Insurance No (required)"
                />
              </div>
              <div className="lg:flex justify-between gap-4">
                <div className="lg:w-[50%]">
                  <input
                    type="text"
                    className="outline outline-1 outline-gray-300 p-2 w-full mb-4"
                    placeholder="Job Applying for (required)"
                  />
                </div>
                <div className="md:flex w-[50%] md:w-full items-center gap-6 justify-between lg:text-xs xl:text-lg mb-4">
                  <p className="text-lg">Job applying for</p>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <p>PPE</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <p>Tools</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <p>Own Transportation</p>
                  </div>
                </div>
              </div>
              <p className="text-lg">Job applying for (copy) (required)</p>
              <div className="lg:flex items-center gap-6 justify-between text-xs mb-5">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>CSCS</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>CPCS</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>IPAF</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>LUA-CAS</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>CIS</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>ESC / JIB</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>EUSR</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>BESC</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>1ST AID</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>CCDO</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>OTHER</p>
                </div>
              </div>
              <div>
                <Button className="bg-[#010C24] text-yellow-400 w-full md:w-[30%] rounded-none hover:bg-yellow-400 hover:text-[#010C24]">
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
