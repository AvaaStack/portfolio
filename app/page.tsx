import Image from "next/image";
import {FaGithub, FaLinkedin,} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HeroContent from "@/components/hero-content";

export default function HomePage() {

  return (
      <section className="grid md:grid-cols-2 gap-10 items-center">
            <div className={"flex flex-col h-full justify-evenly"}>
              <HeroContent/>

              <div className="flex gap-4">
                <a
                    href="https://github.com/AvaaStack"
                    target="_blank"
                    className="border rounded-full p-3 hover:scale-105 transition"
                >
                  <FaGithub size={18} />
                </a>

                <a
                    href="https://www.linkedin.com/in/kosar-mohammadi-45a27415a/"
                    target="_blank"
                    className="border rounded-full p-3 hover:scale-105 transition"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                    href="mailto:contact@avastack.dev"
                    className="border rounded-full p-3 hover:scale-105 transition"
                >
                  <MdEmail size={18} />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <Image src={"/profile.png"} alt={"Kosar (Ava) Mohammadi"}  className="w-85 h-[52vh] object-cover " width={344} height={482}/>
            </div>
          </section>
  );
}