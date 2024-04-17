import { Hero } from "@/components/hero";
import contactImg from "@/assets/contact.png";
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
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="">
      <Navbar />
      <Hero herotext={"Contact Us"} imageSrc={contactImg} />
      <ContactForm />
      <Footer />
    </div>
  );
}
