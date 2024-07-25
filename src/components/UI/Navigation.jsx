"use client";

import { useState } from "react";
import ThemeSwitch from "../themes/ThemeSwitch";
import Link from "next/link";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` h-full bg-secondary text-primaryText transition-width duration-300 ${
        isHovered ? "w-44" : "sm:w-16 w-12"
      }`}
      id="vertical-nav"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="flex flex-col py-7 items-center px-3 justify-between h-full">
        <div className="flex flex-col items-center  gap-4 w-full">
          <NavItem icon="🏠" label="Home" isHovered={isHovered} to="#hero" />
          <NavItem
            icon="💼"
            label="Experience"
            isHovered={isHovered}
            to="#experience"
          />
          <NavItem
            icon="💻"
            label="Projects"
            isHovered={isHovered}
            to="#projects"
          />
          <NavItem
            icon="📄"
            label="Research Papers"
            isHovered={isHovered}
            to="#papers"
          />
          <NavItem
            icon="🎓"
            label="Certificates"
            isHovered={isHovered}
            to="#certificates"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <NavItem icon="📋" label="Resume" isHovered={isHovered} to="resume" />
          <NavItem
            icon="💬 "
            label="Contact"
            isHovered={isHovered}
            to="contact"
          />
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, isHovered, to }) => (
  <div className={"flex items-center w-full gap-2"}>
    <div className="sm:text-2xl text-lg">{icon}</div>
    {isHovered && (
      <Link
        href={to}
        className=" text-base font-medium whitespace-nowrap  font-primary"
      >
        {label}
      </Link>
    )}
  </div>
);
export default Navigation;
