import Image from "next/image";

import profile from "../../../public/assets/profile-pic.png";
import linkedin from "../../../public/assets/linkedin.png";
import github from "../../../public/assets/github.png";
import leetcode from "../../../public/assets/leetcode.png";
import x from "../../../public/assets/x.png";

import react from "../.././../public/assets/react.png";
import nodejs from "../.././../public/assets/nodejs.png";
import sql from "../.././../public/assets/sql.png";
import mongodb from "../.././../public/assets/mongodb.png";
import graphql from "../.././../public/assets/graphql.png";
import nextjs from "../.././../public/assets/nextjs.png";
import reactNative from "../.././../public/assets/react_native.png";
import tailwindcss from "../.././../public/assets/tailwindcss.png";
import typescript from "../.././../public/assets/typescript.png";

const HeroSection = () => {
  return (
    <div
      className="p-7 min-h-[100vh] flex flex-col justify-between gap-8"
      id="hero"
    >
      <div className="flex sm:flex-row flex-col  justify-center items-center sm:gap-20 gap-8">
        <div className="relative sm:w-56 sm:h-56 w-44 h-44 shadow-lg rounded-full">
          <Image src={profile} priority fill className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <p className="md:text-3xl lg:text-5xl text-2xl sm:text-left text-center whitespace-pre-line text-primaryText  font-SFPro">
            {"⚡ Full stack developer, \npart time data engineer"}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 items-center">
        <a
          target="_blank"
          title="LinkedIn profile"
          className="hover:scale-[1.04] transition-all"
          href="https://www.linkedin.com/in/shahtirthh/"
        >
          <Image
            src={linkedin}
            className="w-10 sm:w-12 sm:h-12 h-10"
            priority
          />
        </a>
        <a
          target="_blank"
          title="Github profile"
          className="hover:scale-[1.04] transition-all"
          href="https://github.com/shahtirthhh"
        >
          <Image src={github} priority className="w-10 sm:w-12 sm:h-12 h-10" />
        </a>
        <a
          target="_blank"
          title="Leetcode profile"
          className="hover:scale-[1.04] transition-all"
          href="https://leetcode.com/u/shahtirthhh/"
        >
          <Image
            src={leetcode}
            className="w-9  sm:w-12 sm:h-12 h-9 rounded-full"
            priority
          />
        </a>
        <a
          target="_blank"
          title="X profile"
          className="hover:scale-[1.04] transition-all"
          href="https://leetcode.com/u/shahtirthhh/"
        >
          <Image src={x} className="w-10 sm:w-12 sm:h-12 h-10" priority />
        </a>
      </div>
      <div>
        <p className="font-primary italic font-normal sm:text-lg text-xs text-center">
          " A computer engineering graduate with passion towards building
          intutive solutions and embarking his journey of Data engineer "
        </p>
      </div>
      <div className="infinite_slideshow mt-10">
        <div className=" infinite_slideshow_item slideshow_item1">
          <Image src={react} fill priority />
        </div>
        <div className=" infinite_slideshow_item slideshow_item2">
          <Image src={nodejs} fill priority />
        </div>
        <div className=" infinite_slideshow_item slideshow_item3">
          <Image src={nextjs} fill priority />
        </div>
        <div className=" infinite_slideshow_item slideshow_item4">
          <Image src={sql} fill priority />
        </div>
        <div className=" infinite_slideshow_item slideshow_item5">
          <Image src={typescript} fill priority />
        </div>
        <div className=" infinite_slideshow_item slideshow_item6">
          <Image src={mongodb} fill priority />
        </div>
        <div className=" infinite_slideshow_item slideshow_item7 ">
          <Image src={reactNative} fill priority />
        </div>
        <div className=" infinite_slideshow_item slideshow_item8">
          <Image src={graphql} fill priority />
        </div>
        <div className=" infinite_slideshow_item slideshow_item9">
          <Image src={tailwindcss} fill priority />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
