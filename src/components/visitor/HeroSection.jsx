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
import angular from "../.././../public/assets/angular.png";
import git from "../.././../public/assets/git.png";
import python from "../.././../public/assets/python.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".hero_animate", {
      opacity: 1,
      duration: 0.4,
    });
    gsap.to(".hero_animate", {
      scale: 1,
      delay: 0.8,
      duration: 0.4,
    });
    gsap.to(".message_text1", {
      scrollTrigger: {
        trigger: ".message_text1",
        start: window.innerWidth <= 768 ? "top 70%" : "top 70%",
        end: window.innerWidth <= 768 ? "top 65%" : "top 65%",
        scrub: true,
      },
      opacity: 1,
    });
    gsap.to(".message_text2", {
      scrollTrigger: {
        trigger: ".message_text2",
        start: window.innerWidth <= 768 ? "top 70%" : "top 70%",
        end: window.innerWidth <= 768 ? "top 65%" : "top 65%",
        scrub: true,
      },
      opacity: 1,
    });
    gsap.from("#hero_tech_row1", {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: "#hero_tech_row1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from("#hero_tech_row2", {
      x: "150%",
      ease: "none",
      scrollTrigger: {
        trigger: "#hero_tech_row2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero_scroll", // Target the hero container
          start: "top top", // Start fading when the hero section is at the top
          end: "bottom 40%", // End fading when the hero section is completely out of view
          scrub: true, // Enables scrub (smooth) effect, syncs with scrolling
          markers: false, // Optional: Enable markers to debug positioning
        },
      })
      .fromTo("#hero_scroll", { opacity: 1 }, { opacity: 0 });
  }, []);
  return (
    <div className="sm:mt-0  flex flex-col justify-between gap-8 " id="hero">
      <div id="hero_scroll" className="relative h-[calc(100dvh)] w-full ">
        <div className="fixed inset-0 hero_animate  h-[calc(70dvh)] scale-[0.9] opacity-0 flex flex-col  justify-center items-center sm:gap-20 gap-20">
          <div className="flex flex-col mt-36 md:flex-row w-full items-center justify-center md:gap-10 gap-7">
            <div
              id="hero_main_image"
              className="relative w-52 h-52 md:w-48 md:h-48 lg:w-56 lg:h-56 shadow-lg rounded-full"
            >
              <Image
                src={profile}
                priority
                alt="profile"
                fill
                className="rounded-full"
              />
            </div>
            <div
              id="hero_main_tagline"
              className="flex flex-col items-center md:items-start"
            >
              <p className="lg:text-6xl md:text-4xl text-[2rem] text-primaryText font-SFPro whitespace-pre-line text-left md:text-left md:leading-tight">
                {"⚡ Full stack developer, \npart time data engineer"}
              </p>
            </div>
          </div>

          <div
            id="hero_links"
            className=" flex flex-wrap justify-center gap-10 items-center"
          >
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
        </div>
      </div>

      <div className="flex flex-col h-[calc(100dvh)] w-full justify-center gap-10 ">
        {/* <p className=" w-full font-primary italic font-normal sm:text-xl text-sm text-center">
            <marquee>
              " A computer engineering graduate with passion towards building
              intutive solutions and embarking his journey of Data engineer "
            </marquee>
          </p> */}
        <div
          id="hero_message"
          className="flex flex-col w-full font-SFPro m-4 sm:text-7xl text-4xl tracking-wide gap-3"
        >
          <h1 className="message_text1 w-full dark:text-white/80 text-neutral-600 opacity-15">
            Tech skills and,
          </h1>
          <h1 className="message_text2 w-full dark:text-white/80 text-neutral-600 whitespace-nowrap opacity-15">
            Learning journey 🧭
          </h1>
        </div>
        <div className="flex flex-col gap-20 w-screen relative">
          <div
            id="hero_tech_row1"
            className="flex flex-row w-fit gap-32 overflow-hidden "
          >
            <div className="relative w-16 h-16">
              <Image title="NodeJS" src={nodejs} fill priority alt="tech" />
            </div>
            <div className="relative w-16 h-16">
              <Image title="ReactJS" src={react} fill priority alt="tech" />
            </div>
            <div className="relative w-16 h-16">
              <Image title="Angular" src={angular} fill priority alt="tech" />
            </div>
            <div className="relative w-16 h-16">
              <Image title="SQL" src={sql} fill priority alt="tech" />
            </div>
            <div className="relative w-16 h-16">
              <Image title="MongoDB" src={mongodb} fill priority alt="tech" />
            </div>
            <div className="relative w-16 h-16">
              <Image title="Python" src={python} fill priority alt="tech" />
            </div>
          </div>
          <div
            id="hero_tech_row2"
            className="flex flex-row w-fit gap-32 overflow-hidden "
          >
            <div className="relative w-16 h-16">
              <Image
                title="Typescript"
                src={typescript}
                fill
                priority
                alt="tech"
              />
            </div>
            <div className="relative w-16 h-16">
              <Image title="GraphQL" src={graphql} fill priority alt="tech" />
            </div>
            <div className="relative w-16 h-16">
              <Image
                title="TailwindCSS"
                src={tailwindcss}
                fill
                priority
                alt="tech"
              />
            </div>
            <div className="relative w-16 h-16">
              <Image title="NextJS" src={nextjs} fill priority alt="tech" />
            </div>
            <div className="relative w-16 h-16">
              <Image
                title="React Native"
                src={reactNative}
                fill
                priority
                alt="tech"
              />
            </div>
            <div className="relative w-16 h-16">
              <Image title="git" src={git} fill priority alt="tech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
