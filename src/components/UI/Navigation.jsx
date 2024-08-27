"use client";

import { useState } from "react";
import ThemeSwitch from "../themes/ThemeSwitch";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  useGSAP(() => {
    gsap.to("#vertical-nav", {
      x: 0,
      delay: 0.5,
      duration: 0.4,
    });
  }, []);
  return (
    <div
      className={`-translate-x-16 sticky top-0 z-[29] h-[calc(100dvh)] bg-secondary text-primaryText transition-width duration-300 ${
        isHovered ? "w-44" : "sm:w-16 w-12"
      }`}
      id="vertical-nav"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className=" flex flex-col py-7 items-center px-3 justify-between h-full">
        <div className="flex flex-col items-center  gap-4 w-full">
          <NavItem
            setHovered={setIsHovered}
            icon="🏠"
            label="Home"
            isHovered={isHovered}
            to="/#hero"
          />
          <NavItem
            setHovered={setIsHovered}
            icon="💼"
            label="Experience"
            isHovered={isHovered}
            to="/#experience"
          />
          <NavItem
            setHovered={setIsHovered}
            icon="💻"
            label="Projects"
            isHovered={isHovered}
            to="/#projects"
          />
          <NavItem
            setHovered={setIsHovered}
            icon="✒"
            label="Publications"
            isHovered={isHovered}
            to="/#publications"
          />
          <NavItem
            setHovered={setIsHovered}
            icon="🎓"
            label="Certificates"
            isHovered={isHovered}
            to="/#certificates"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <NavItem
            setHovered={setIsHovered}
            icon="📋"
            label="Resume"
            isHovered={isHovered}
            to="/resume"
          />
          <NavItem
            setHovered={setIsHovered}
            icon="💬"
            label="Contact"
            isHovered={isHovered}
            to="/contact"
          />
          <NavItem
            setHovered={setIsHovered}
            icon="👤"
            label="Admin"
            isHovered={isHovered}
            to="/admin"
          />
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, isHovered, to, setHovered }) => (
  <div className={"flex items-center w-full gap-2"}>
    <Link
      onClick={() => setHovered(false)}
      href={to}
      className="sm:text-2xl text-lg"
    >
      {icon}
    </Link>
    {isHovered && (
      <Link
        onClick={() => setHovered(false)}
        href={to}
        className=" text-base font-medium whitespace-nowrap  font-primary"
      >
        {label}
      </Link>
    )}
  </div>
);
export default Navigation;
