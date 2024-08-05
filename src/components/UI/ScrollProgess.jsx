"use client";

import { useEffect } from "react";
import useIntersectionObserver from "./useInterSectionObserver";

const ScrollProgess = () => {
  useIntersectionObserver(
    ".on-scroll-normal",
    (entry) => {
      entry.target.classList.add("show");
    },
    (entry) => {
      entry.target.classList.remove("show");
    }
  );

  useEffect(() => {
    const target = document.querySelector(".scroll-width");
    const document_height = document.documentElement.scrollHeight;
    const viewport_height = document.documentElement.clientHeight;

    window.onscroll = () => {
      let percentage_scrolled =
        (scrollY / (document_height - viewport_height)) * 100;
      target.style.width = percentage_scrolled + "%";
    };

    // const elements = document.querySelectorAll(".on-scroll-normal");

    // const observer = new IntersectionObserver((entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       console.log(entry);
    //       entry.target.classList.add("show");
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // });

    // elements.forEach((element) => {
    //   observer.observe(element);
    // });
  }, []);
  return (
    <div className="scroll-width fixed z-30  h-1 top-0 left-0 bg-[#3568ff]"></div>
  );
};

export default ScrollProgess;
