import Image from "next/image";
import {FaGithub, FaLinkedin,} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HeroContent from "@/components/hero-content";
import AboutSection from "@/components/about-section";

export default function HomePage() {

  return (
      <>
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className={"flex flex-col h-full justify-evenly"}>
            <HeroContent/>
            <div className="flex gap-4">
              <a href="https://github.com/AvaaStack" target="_blank" className="border rounded-full p-3 hover:scale-105 transition">
                <FaGithub size={18} />
              </a>

              <a href="https://www.linkedin.com/in/kosar-mohammadi-45a27415a/" target="_blank" className="border rounded-full p-3 hover:scale-105 transition">
                <FaLinkedin size={18} />
              </a>

              <a href="mailto:contact@avastack.dev" className="border rounded-full p-3 hover:scale-105 transition">
                <MdEmail size={18} />
              </a>
            </div>
          </div>


          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-4xl bg-red-300/20 blur-2xl dark:bg-red-800/20" />

              <Image src="/profile.png" alt="Kosar (Ava) Mohammadi" width={344} height={482} priority className="h-auto w-70 object-cover drop-shadow-[0_0_20px_rgba(0,0,40,0.15)] dark:drop-shadow-[0_0_30px_rgba(0,0,60,0.25)] md:w-86"/>
            </div>
          </div>
        </section>
        <AboutSection/>
      </>

  );
}