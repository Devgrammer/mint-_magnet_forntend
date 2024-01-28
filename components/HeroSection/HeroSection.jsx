import React from "react";
import Image from "next/image";
import images from "../../img";
import { Button } from "../componentsindex";
import { CgSearch } from "react-icons/cg";

const Hero = () => {
  return (
    <div className="hero-container flex flex-col md:flex-row justify-between gap-y-16 md:gap-y-0 gap-x-24  items-start text-slate-300">
      {/* HERO LEFT PART */}
      <div className="hero-container-left space-y-12 mt-16 w-full md:w-[55%]">
        <div className="hero-container-heading text-6xl  font-semibold leading-snug">
          Discover, collect, and sell NFTs 🖼️
        </div>
        <div className="text-slate-500 ">
          Discover the most outstanding NTFs in all topics of life. Creative
          your NTFs and sell them
        </div>

        <Button
          btnText={
            <div className="flex items-center gap-2">
              Start your search <CgSearch />{" "}
            </div>
          }
        />
      </div>

      {/* HERO RIGHT PART */}
      <div className="hero-container-right flex justify-end">
        <Image src={images.hero} alt="hero-img" width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;
