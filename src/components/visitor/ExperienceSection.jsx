"use client";
import experiences from "@/data/experiences";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import experience from "../../../public/assets/experience.gif";
import { useEffect, useRef } from "react";

const ExperienceSection = () => {
  const experience_title = useRef([]);
  const experience_company = useRef([]);
  const experience_core = useRef([]);
  const experience_know_more = useRef([]);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#experience_heading", {
      scrollTrigger: {
        trigger: "#experience_heading",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
      scale: 1.3,
      ease: "power1.out",
    });
    gsap.to("#experience_heading_inner", {
      scrollTrigger: {
        trigger: "#experience_heading_inner",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
      opacity: 0.4,
    });
  });

  const animateElements = (elements) => {
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "top 80%",
          scrub: true,
        },
        duration: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        ease: "power1.out",
      });
    });
  };

  useEffect(() => {
    animateElements(experience_title.current);
    animateElements(experience_company.current);
    animateElements(experience_core.current);
    animateElements(experience_know_more.current);
  }, [experiences]);

  return (
    <div id="experience" className="p-4 flex flex-col items-center gap-32">
      <div
        id="experience_heading"
        className="bg-primary pt-4 sticky md:top-16 top-0 z-[28] md:w-[50vw] py-2 w-full flex flex-row justify-center items-center  scale-[2] gap-6"
      >
        <Image src={experience} className="w-6 h-6" alt="ex" />
        <p
          id="experience_heading_inner"
          className="font-sans text-center  italic font-medium  lg:text-base md:text-sm text-xs  text-primaryText"
        >
          Industry Experience
        </p>
      </div>
      <div
        id="experience_container"
        className="relative z-[27] flex flex-col gap-32"
      >
        {experiences.map((experience, index) => (
          // Single entry
          <div key={experience.id} className=" flex flex-col sm:p-6 p-3 gap-6">
            {/* Heading section */}
            <div className="flex flex-col justify-between  items-start gap-1">
              <div
                ref={(el) => (experience_title.current[index] = el)}
                className=" translate-x-40 scale-[0.9] opacity-0 btn-shine font-SFPro lg:text-4xl md:text-3xl text-2xl sm:text-left text-primaryText"
              >
                <p>{experience.title}</p>
              </div>
              <p
                ref={(el) => (experience_company.current[index] = el)}
                className=" translate-x-40 scale-[0.9] opacity-0  lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText"
              >
                {experience.duration}
              </p>
            </div>
            <div className="flex flex-col  justify-center items-start gap-2  ">
              <p
                ref={(el) => (experience_core.current[index] = el)}
                className="translate-x-40 scale-[0.9] opacity-0  lg:text-lg md:text-base text-sm font-light font-primary text-primaryText"
              >
                {experience.core}
              </p>
              <Link
                ref={(el) => (experience_know_more.current[index] = el)}
                href={`/experience/${experience.id}`}
                className="know-more translate-x-40 scale-[0.9] opacity-0  flex font-primary sm:text-xs text-sm underline underline-offset-2"
              >
                <span>Know more</span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    fill="green"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
