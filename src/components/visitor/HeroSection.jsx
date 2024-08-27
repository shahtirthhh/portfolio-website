"use client";
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    gsap.to(".hero_animate", {
      opacity: 1,
      duration: 0.4,
    });
    gsap.to(".hero_animate", {
      scale: 1,
      delay: 0.5,
      duration: 0.4,
    });
  }, []);
  return (
    <div
      className="p-7 min-h-[100vh] flex flex-col justify-between gap-8 "
      id="hero"
    >
      <div className="hero_animate  scale-[0.9] opacity-0 flex sm:flex-row flex-col  justify-center items-center sm:gap-20 gap-8">
        <div className="on-scroll-normal relative sm:w-56 sm:h-56 w-44 h-44 shadow-lg rounded-full">
          <Image
            src={profile}
            priority
            alt="profile"
            fill
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="on-scroll-normal md:text-3xl lg:text-5xl text-2xl sm:text-left text-center whitespace-pre-line text-primaryText font-SFPro">
            {"⚡ Full stack developer, \npart time data engineer"}
          </p>
        </div>
      </div>
      <div className="hero_animate  scale-[0.9] opacity-0 flex flex-wrap justify-center gap-10 items-center">
        <a
          target="_blank"
          title="LinkedIn profile"
          className=" hover:scale-[1.04] transition-all"
          href="https://www.linkedin.com/in/shahtirthh/"
        >
          <Image
            src={linkedin}
            className="w-10 sm:w-12 sm:h-12 h-10"
            priority
            alt="linkedIn"
          />
        </a>
        <a
          target="_blank"
          title="Github profile"
          className=" hover:scale-[1.04] transition-all"
          href="https://github.com/shahtirthhh"
        >
          <Image
            src={github}
            priority
            className="w-10 sm:w-12 sm:h-12 h-10"
            alt="github"
          />
        </a>
        <a
          target="_blank"
          title="Leetcode profile"
          className=" hover:scale-[1.04] transition-all"
          href="https://leetcode.com/u/shahtirthhh/"
        >
          <Image
            src={leetcode}
            className="w-9  sm:w-10 sm:h-10 h-9 rounded-full"
            priority
            alt="leetcode"
          />
        </a>
        <a
          target="_blank"
          title="X profile"
          className=" hover:scale-[1.04] transition-all"
          href="https://x.com/shahtirthhh"
        >
          <Image
            src={x}
            className="w-10 sm:w-12 sm:h-12 h-10"
            priority
            alt="X"
          />
        </a>
      </div>
      <div>
        <p className="hero_animate  scale-[0.9] opacity-0 font-primary italic font-normal sm:text-lg text-xs text-center">
          " A computer engineering graduate with passion towards building
          intutive solutions and embarking his journey of Data engineer "
        </p>
      </div>
      <div className="hero_animate  scale-[0.9] opacity-0 infinite_slideshow mt-10">
        <div className=" infinite_slideshow_item slideshow_item1">
          <Image title="ReactJS" src={react} fill priority alt="tech" />
        </div>
        <div className=" infinite_slideshow_item slideshow_item2">
          <Image title="NodeJS" src={nodejs} fill priority alt="tech" />
        </div>
        <div className=" infinite_slideshow_item slideshow_item3">
          <Image title="NextJS" src={nextjs} fill priority alt="tech" />
        </div>
        <div className=" infinite_slideshow_item slideshow_item4">
          <Image title="SQL" src={sql} fill priority alt="tech" />
        </div>
        <div className=" infinite_slideshow_item slideshow_item5">
          <Image title="Typescript" src={typescript} fill priority alt="tech" />
        </div>
        <div className=" infinite_slideshow_item slideshow_item6">
          <Image title="MongoDB" src={mongodb} fill priority alt="tech" />
        </div>
        <div className=" infinite_slideshow_item slideshow_item7 ">
          <Image
            title="React Native"
            src={reactNative}
            fill
            priority
            alt="tech"
          />
        </div>
        <div className=" infinite_slideshow_item slideshow_item8">
          <Image title="GraphQL" src={graphql} fill priority alt="tech" />
        </div>
        <div className=" infinite_slideshow_item slideshow_item9">
          <Image
            title="TailwindCSS"
            src={tailwindcss}
            fill
            priority
            alt="tech"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
