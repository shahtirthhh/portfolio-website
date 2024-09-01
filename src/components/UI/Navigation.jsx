"use client";

import { useState } from "react";
import ThemeSwitch from "../themes/ThemeSwitch";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import logo from "../../../public/assets/favicon.png";
// import close from "../../../public/assets/close.png";

const Navigation = () => {
  const [navStatus, toggleNav] = useState(false);

  useGSAP(() => {
    // gsap.to(".nav-bar", {
    //   opacity: 1,
    //   duration: 0.4,
    // });
    gsap.to(".nav-bar", {
      scale: 1,
      delay: 1.3,
      y: 0,
      opacity: 1,
      duration: 0.4,
    });
  }, []);
  return (
    // <div
    //   className={`-translate-x-16 sticky top-0 z-[29] h-[calc(100dvh)] bg-secondary text-primaryText transition-width duration-300 ${
    //     isHovered ? "sm:w-36 w-32" : "sm:w-14 w-10"
    //   }`}
    //   id="vertical-nav"
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    // >

    <>
      {/*  Navbar for PC */}
      <nav className="nav-bar scale-[0.9] -translate-y-10 opacity-0 hidden md:flex flex-row  pt-4 items-center justify-center px-3 sticky top-0 z-[29] w-full">
        <div className="bg-secondary flex flex-row  items-center justify-center lg:gap-10 gap-5 px-4 py-2 rounded-2xl">
          <NavItem
            label={<Image src={logo} className="w-7 h-7 mr-6" alt="logo" />}
            title="Tirth"
            to="/"
          />
          <NavItem icon="🏠" label="Home" title="Home" to="/#hero" />
          <NavItem
            label="Experience"
            title="Work Experience"
            to="/#experience"
          />
          <NavItem title="Project Work" label="Projects" to="/#projects" />
          <NavItem
            label="Publications"
            title="Research / Survey papers"
            to="/#publications"
          />
          <NavItem
            title="Certifications"
            label="Certificates"
            to="/#certificates"
          />
          <NavItem label="Resume" title="Get my resume" to="/resume" />
          <NavItem label="Contact" title="Contact Me" to="/contact" />

          <ThemeSwitch />
        </div>
        {/* <div className="flex flex-row items-center gap-6"></div> */}
      </nav>

      {/* Navbar for mobile */}
      <div
        onClick={() => toggleNav((prev) => !prev)}
        className="nav-bar scale-[0.9] opacity-0  md:hidden fixed top-4 right-2 p-2  rounded-xl backdrop-blur-md w-fit z-[29] flex flex-col gap-1 items-end"
      >
        <div className="w-8 h-1 rounded-full dark:bg-white bg-neutral-800"></div>
        <div className="w-4 h-1 rounded-full dark:bg-white bg-neutral-800"></div>
        <div className="w-2 h-1 rounded-full dark:bg-white bg-neutral-800"></div>
      </div>

      <nav
        onClick={() => toggleNav((prev) => !prev)}
        className={`flex md:hidden w-screen transition-all duration-500 h-[calc(100dvh)] bg-secondary pt-20 fixed top-0 ${
          navStatus ? "top-0 opacity-100" : "opacity-0 top-[calc(-100dvh)]"
        } left-0 flex-col p-7 z-[29]`}
      >
        <div className="flex flex-col items-start justify-center sm:gap-10 gap-5 px-4 py-2 rounded-2xl mr-[5%]">
          <NavItem
            label="Home"
            title="Home"
            navStatus={navStatus}
            toggleNav={toggleNav}
            to="/#hero"
          />
          <NavItem
            label="Experience"
            title="Work Experience"
            navStatus={navStatus}
            toggleNav={toggleNav}
            to="/#experience"
          />
          <NavItem
            title="Project Work"
            label="Projects"
            navStatus={navStatus}
            toggleNav={toggleNav}
            to="/#projects"
          />
          <NavItem
            label="Publications"
            title="Research / Survey papers"
            navStatus={navStatus}
            toggleNav={toggleNav}
            to="/#publications"
          />
          <NavItem
            title="Certifications"
            label="Certificates"
            navStatus={navStatus}
            toggleNav={toggleNav}
            to="/#certificates"
          />

          <NavItem
            label="Resume"
            title="Get my resume"
            navStatus={navStatus}
            toggleNav={toggleNav}
            to="/resume"
          />
          <NavItem
            label="Contact"
            title="Contact Me"
            navStatus={navStatus}
            toggleNav={toggleNav}
            to="/contact"
          />

          <ThemeSwitch />
        </div>
      </nav>
    </>
    // </div>
  );
};

const NavItem = ({ icon, label, toggleNav, to, navStatus, title }) => (
  // <div className={"flex items-center w-full gap-2 "}>
  // {/* <Link
  //   onClick={() => setHovered(false)}
  //   href={to}
  //   className="sm:text-lg text-xs"
  // >
  //   {icon}
  // </Link>
  // {isHovered && (
  // */}
  // // onClick={() => setHovered(false)}
  // {/* )} */}
  <>
    {navStatus && (
      <Link title={title} href={to} legacyBehavior>
        <a
          className="md:hidden flex sm:text-2xl text-xl font-medium whitespace-nowrap font-primary"
          onClick={(e) => {
            e.stopPropagation();
            toggleNav(false);
          }}
        >
          {label}
        </a>
      </Link>
    )}

    <Link
      title={title}
      href={to}
      className="hidden md:flex  sm:text-base text-sm font-medium whitespace-nowrap  font-primary"
    >
      {label}
    </Link>
  </>
  // </div>
);
export default Navigation;
