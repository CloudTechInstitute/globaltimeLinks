import { Hero } from "@/components/hero";
import aboutImg from "@/assets/about.png";
import constructors from "@/assets/constructors.png";
import midimg from "@/assets/midimg.png";
import footerimg from "@/assets/footerimg.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CardLeft } from "@/components/leftCard";
import { MiddleUI } from "@/components/middleUI";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function About() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Hero herotext={"About Us"} imageSrc={aboutImg} />
      <div className="mb-10"></div>
      <CardLeft
        titlesmall={"WHO WE ARE"}
        titlebig={"Independent Construction Recruitment Agency"}
        imageSrc={constructors}
        desctext={
          "GlobalTime Links is an independent construction recruitment agency. We are specialists in Trades and Labour supply, long-term and day to day positions within the construction industry. We pride ourselves in honesty, integrity and reliability, which you’ll find very refreshing. You can be assured that we will explore every available avenue in ensuring you are provided with the right type of employment. Due to years of experience we have an excellent understanding of the construction industry and have spent years creating a network of trustworthy and successful relationships with clients ensuring we are experts in providing the right type of employment for you within the professional field."
        }
      />
      <div className="mb-10"></div>
      <MiddleUI
        herotext={
          <>
            <p className="mb-16 text-yellow-400 font-bold text-4xl uppercase">
              The team
            </p>
            <p>
              EMPLOYEES HOLD VALID AND UP-TO-DATE CSCS CARDS AND CERTIFICATES
              MEANING WE CAN BE ONSITE SITE PROVIDING A HANDS ON SERVICE AND
              INDIVIDUAL SERVICE ONSITE WHILE WORK IS TAKING PLACE. OUR SENIOR
              MEMBERS OF STAFF WILL AIM TO MEET WITH A REPRESENTATIVE FROM YOUR
              COMPANY REGULARLY TO ENSURE CUSTOMER SATISFACTION AND TO ADDRESS
              ANY PROBLEMS THAT MAY ARISE DURING THE PROJECT QUICKLY AND
              EFFICIENTLY.
            </p>
          </>
        }
        imageSrc={midimg}
      />
      <div className="mb-10"></div>
      <div className="flex justify-center w-full">
        <div className="max-w-[1024px] px-10">
          <p className="font-bold text-4xl mb-5">Recruitment</p>
          <p className="mb-4">
            Our scalable recruitment service is based on the principle of
            matching the right person with the right vacancy and the ability to
            fulfill any size order from one operative to multiple sites.
            Dedicated consultants utilise our vast network to obtain the
            candidates in the desired area and perform pre-screening of all
            candidates thoroughly to ensure that they have the correct technical
            skills and aptitude required for the role. Using Bespoke packages we
            are able to provide clients with a service that focuses on their
            needs, including agreements such as:
          </p>
          <div className="mb-4">
            <ul>
              <li>1. Contract and Temdivoraries attainment</li>
              <li>2. Retained Searches</li>
              <li>3. Contingent Exclusive Searches</li>
              <li>4. RPO</li>
            </ul>
          </div>
          <p className="mb-10">
            We take great care in addressing the needs of both clients and
            candidates, providing a personal and flexible service tailored to
            suit you.
          </p>
          <a href="/contact">
            <Button className="bg-yellow-400 text-black rounded-none w-full md:w-[20%] hover:bg-[#010C24] hover:text-yellow-400">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
      <div className="mb-10"></div>
      <div className="flex justify-center w-full bg-yellow-100 py-24">
        <div className="max-w-[1024px] px-10">
          <div className="md:flex justify-between gap-12">
            <ul>
              <li className="mb-3 text-lg font-bold">
                Civil Engineering Trades
              </li>
              <li>Chain boys</li>
              <li>General labour</li>
              <li>Ground workers</li>
              <li>Concrete finishers</li>
              <li>Kerblayers/ Streetworks</li>
              <li>Tarmac layers</li>
              <li>Steel fixers/Niphands</li>
              <li>Carpenters (shuttering & formwork)</li>
              <li>Ganger / Foreman</li>
              <li>Setting Out Engineers</li>
              <li>Site Engineers</li>
              <li>Site Managers</li>
              <li>Construction Managers</li>
            </ul>
            <ul>
              <li className="mb-3 text-lg font-bold">Construction Trades</li>
              <li>General builders</li>
              <li>Carpenters (1st & 2nd Fix)</li>
              <li>Bench Joiners</li>
              <li>Exhibition Carpenters</li>
              <li>Bricklayers</li>
              <li>Stonemasons</li>
              <li>Painters (all finishes)</li>
              <li>Decorators (paper hangers)</li>
              <li>Plasterers (inc fibrous)</li>
              <li>Dryliners</li>
              <li>Tilers</li>
              <li>Ceiling fixer</li>
              <li>Partitioners</li>
              <li>Kitchen fitters</li>
              <li>Floor/ Carpet Fitters</li>
            </ul>
            <ul>
              <li className="mb-3 text-lg font-bold">
                Construction Plant Operators
              </li>
              <li>180/360 Plant operators</li>
              <li>Mini plant (restricted access)</li>
              <li>Dump truck / Dozer</li>
              <li>Dumper operators</li>
              <li>Scissor lift / Cherry picker</li>
              <li>Slinger banksman / Hoist operators</li>
              <li>Crane operators</li>
              <li>Quarry plant operators</li>
              <li>Demolition plant operators</li>
              <li>Forklift telescopic rough Terraine</li>
              <li>Forklift reach operators</li>
              <li>Crane Operators</li>
              <li>Crane Supervisors & Appointed Person</li>
            </ul>
            <ul>
              <li className="mb-3 text-lg font-bold">Labour</li>
              <li>Gateman</li>
              <li>General labour</li>
              <li>Skilled labour</li>
              <li>Demo labour</li>
              <li>
                Experienced labour Scaffolders, <br />
                Scaffold labourers
              </li>
              <li>Gardeners, Landscapers</li>
              <li>Litter pickers</li>
              <li>Builders & General Cleaners</li>
              <li>Site security</li>
              <li>Roofers</li>
              <li>Cladders</li>
              <li>Steel Erectors</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
