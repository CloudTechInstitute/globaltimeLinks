import { Hero } from "@/components/hero";
import contactImg from "@/assets/contact.png";
import home1 from "@/assets/home1.png";
import contractor from "@/assets/contractor.png";
import homemid from "@/assets/homemid.png";
import unity from "@/assets/unity.png";
import city from "@/assets/city.png";
import homehero from "@/assets/homehero.png";
import hands from "@/assets/hands.png";
import recruitment from "@/assets/recruitment.png";
import { Button } from "@/components/ui/button";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { CardLeft } from "@/components/leftCard";
import { Footer } from "@/components/footer";
import { CardRight } from "@/components/rightCard";
import { MiddleUI } from "@/components/middleUI";
import { HomeHero } from "@/components/homehero";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HomeHero
        herotext={"Experts Of Trades And Labour Recruitment"}
        imageSrc={homehero}
        titlesmall={"Honesty, Integrity, Reliability"}
        component={
          <>
            <div className="flex gap-6 max-w-md mt-8">
              <Button className="bg-yellow-400 text-[#010C24] w-full md:w-[50%] rounded-none hover:bg-[#010C24] hover:text-yellow-400">
                Read more
              </Button>
              <Button className="bg-transparent outline outline-1 outline-yellow-400 text-yellow-400 w-full md:w-[50%] rounded-none hover:bg-[#010C24] hover:text-yellow-400">
                Read more
              </Button>
            </div>
          </>
        }
      />
      <div className="mb-10"></div>
      <CardLeft
        titlesmall={"ABOUT US"}
        titlebig={"GlobalTime Links, An Innovative Construction Hub"}
        desctext={
          "GlobalTime Links is an Innovative construction recruitment agency who pride themselves in honesty, integrity and reliability offering the construction industry thevery best in skilled labour, tradesmen and plant operators. "
        }
        component={
          <Button className="bg-yellow-400 text-black rounded-none w-full md:w-[20%] hover:bg-[#010C24] hover:text-yellow-400">
            Read more
          </Button>
        }
        imageSrc={home1}
      />
      <div className="bg-[#ECECEC] p-10 mb-10 w-full flex justify-center">
        <div className="max-w-[1024px]">
          <div className="flex items-center gap-6 justify-start">
            <div className="h-[2px] w-20 bg-black"></div>
            <p className="text-xl md:text-2xl uppercase font-bold">
              WHAT WE OFFER
            </p>
          </div>
          <div className="mb-5">
            Our in-depth industry knowledge means we can offer valuable insight,
            thought processes and solutions when working on completing projects
            successfully and on time.
          </div>
          <div className="md:flex justify-between gap-6">
            <Card className="w-full mb-4">
              <CardHeader>
                <Image src={hands} className="w-full" />
                <CardTitle className="text-lg font-black">
                  RIGHT PEOPLE
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our scalable recruitment service is based on the principle of
                matching the right person with the right vacancy and the ability
                to fulfil any size order from one operative to multiple sites.
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="w-full mb-4">
              <CardHeader>
                <Image src={city} className="w-full" />
                <CardTitle className="text-lg font-black">
                  WE ARE SPECIALISTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                GlobalTime Links has over 30 years combined experience
                specialising in trades and labour placements to Civils, Fit Out,
                Logistics and M&E.
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="w-full mb-4">
              <CardHeader>
                <Image src={unity} className="w-full" />
                <CardTitle className="text-lg font-black">
                  THE BEST CANDIDATES
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our dedicated consultants utilise our vast network to obtain the
                candidates in the desired area and perform pre-screening of all
                candidates thoroughly to ensure that they have the correct
                technical skills and aptitude required for the role.
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <CardRight
        titlesmall={"HOW IT WORKS"}
        titlebig={
          <>
            Understanding Our Clients <br />{" "}
            <span className=" font-semibold text-gray-600 text-2xl italic">
              - Our Working Process
            </span>
          </>
        }
        desctext={
          <>
            This means faster placements and higher workplace efficiency for
            your business. Our team are highly experienced and understand what
            our clients need and expect from their staff. Quint Construction
            Services pride themselves on honesty, providing a productive and
            reliable workforce you can trust to do the job right and keep you
            and your business compliant.
            <p className="text-xl font-bold mt-5">Types Of Recruitment</p>
            <p>1. Contract and Temporaries attainment</p>
            <p>2. Retained Searches</p>
            <p>3. Contingent Exclusive Searches</p>
            <p>4. RPO</p>
          </>
        }
        imageSrc={recruitment}
      />
      <MiddleUI
        herotext={
          <>
            <p className="mb-4 lg:mb-8 text-yellow-400 font-bold text-md lg:text-4xl uppercase">
              WHY CHOOSE GLOBALTIME LINKS
            </p>
            <p className="font-regular lg:text-2xl mb-2 lg:mb-10">
              We pride ourselves in being a responsive, proactive and a reliable
              company. You can be assured that we will explore every available
              avenue in ensuring you.
            </p>
            <hr />
            <div className="lg:flex justify-center gap-3 text-md mt-8">
              <div className="">
                <div className="flex justify-start gap-4 items-center lg:mb-8">
                  <div className="text-2xl lg:text-6xl text-yellow-500">
                    <IoCheckmarkDoneCircleSharp />
                  </div>
                  <div className="font-bold text-xl lg:text-3xl">
                    Our Placements
                  </div>
                </div>
                <div className="text-left text-md xl:text-2xl ml-8">
                  <p>1. Quality sites with notable construction companies </p>
                  <p>2. Cover national construction sites.</p>
                </div>
              </div>
              <div className="">
                <div className="flex justify-start gap-4 items-center lg:mb-8">
                  <div className="text-2xl lg:text-6xl text-yellow-500">
                    <IoCheckmarkDoneCircleSharp />
                  </div>
                  <div className="font-bold text-xl lg:text-3xl">
                    We Offer Our Operatives
                  </div>
                </div>
                <div className="text-left text-md ml-8 xl:text-2xl">
                  <p>1. 100% support, empathy and integrity </p>
                  <p>2. Competitive pay rates</p>
                  <p>3. Dedicated customer services team 7 days a week</p>
                </div>
              </div>
            </div>
          </>
        }
        imageSrc={homemid}
      />
      <div className="mb-10"></div>
      <CardLeft
        titlesmall={"HONESTY, INTEGRITY AND RELIABILITY = SUCCESS"}
        titlebig={"The Knowledge"}
        desctext={
          <>
            Our in-depth industry knowledge means we can offer valuable insight,
            thought processes and solutions when working on completing projects
            successfully and on time. With a strong emphasis on efficiency and
            quality, and over 30 years combined experience within the
            construction industry, GlobalTime Links have built a strong network
            enabling us to maintain successful relationships and ensuring a high
            level of service.
          </>
        }
        component={
          <Button className="bg-yellow-400 text-black rounded-none w-full md:w-[20%] hover:bg-[#010C24] hover:text-yellow-400">
            Read more
          </Button>
        }
        imageSrc={contractor}
      />
      <Footer />
    </div>
  );
}
