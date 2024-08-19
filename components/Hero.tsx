import { ArrowRight } from "lucide-react";
import React from "react";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_96%)]">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0c20b4] text-transparent bg-clip-text mt-6">
              Pathway to Clodron
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Create your unique application with Clodron. Our app designed to
              help you streamline your workflow.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for free
              </button>
              <button className="text-black bg-transparent hover:bg-black/5 px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight group gap-1">
                <span>Learn more</span>{" "}
                <ArrowRight className="h-5 w-5 group-hover:rotate-90 transition-all duration-300" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              alt="cylinder image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              alt="noodle image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
