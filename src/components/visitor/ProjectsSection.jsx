"use client";
import projects from "@/data/projects";
import Link from "next/link";
import project from "../../../public/assets/project.gif";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import VideoPlayer from "../UI/VideoPlayer";

const ProjectsSection = () => {
  const project_title = useRef([]);
  const project_core = useRef([]);
  const project_know_more = useRef([]);
  const project_know_more2 = useRef([]);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#projects_heading", {
      scrollTrigger: {
        trigger: "#projects_heading",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
      scale: 1.3,
      ease: "power1.out",
    });
  });

  const animateElements = (elements) => {
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 60%",
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
    animateElements(project_title.current);
    animateElements(project_core.current);
    animateElements(project_know_more.current);
    animateElements(project_know_more2.current);
  }, [projects]);
  return (
    <div id="projects" className="p-4 flex flex-col gap-32">
      <div
        id="projects_heading"
        className="bg-primary pt-4 sticky top-0 z-[28] w-full flex flex-row justify-center items-center  scale-[2] gap-3"
      >
        <Image src={project} className="w-8 h-8 " alt="ex" />
        <p className="font-primary text-center  italic font-medium  lg:text-xl md:text-base text-sm  text-primaryText">
          Projects
        </p>
      </div>
      {projects.map((project, index) => (
        // Single entry
        <div
          key={project.id}
          className="flex sm:flex-row relative z-[27] flex-col justify-between sm:p-6 p-3 gap-6"
        >
          {/* Heading section */}
          <div className="on-scroll-normal flex flex-col justify-between h-fit items-start gap-1">
            <h1
              ref={(el) => (project_title.current[index] = el)}
              className="translate-x-40 scale-[0.9] opacity-0 btn-shine font-SFPro lg:text-4xl md:text-3xl text-2xl sm:text-left text-primaryText"
            >
              {project.title}
            </h1>
            <p
              ref={(el) => (project_core.current[index] = el)}
              className="translate-x-40 scale-[0.9] opacity-0 lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText"
            >
              {project.core}
            </p>
            <Link
              ref={(el) => (project_know_more.current[index] = el)}
              href={"/projects/" + project.id}
              className="translate-x-40 scale-[0.9] opacity-0 know-more sm:flex hidden font-primary sm:text-xs text-sm underline underline-offset-2"
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
          <div className="flex sm:flex-row flex-col  justify-between sm:items-center items-start gap-2  ">
            {/* <video
              src={project.video}
              poster={project.images[0]}
              controls
              className="on-scroll-normal rounded-md shadow-md sm:w-[32rem] "
            ></video> */}
            <VideoPlayer
              posterSrc={project.images[0]}
              videoSrc={project.video}
            />

            <Link
              ref={(el) => (project_know_more2.current[index] = el)}
              href={"/projects/" + project.id}
              className="know-more sm:hidden flex font-primary sm:text-xs text-sm underline underline-offset-2"
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
  );
};

export default ProjectsSection;
