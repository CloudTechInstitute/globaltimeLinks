import { Hero } from "@/components/hero";
import contactImg from "@/assets/greeting.png";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import JoinForm from "@/components/join-form";

export default function Join() {
  return (
    <div className="">
      <Navbar />
      <Hero herotext={"Join Us"} imageSrc={contactImg} />
      <JoinForm />
      <Footer />
    </div>
  );
}
