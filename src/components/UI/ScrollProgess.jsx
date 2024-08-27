"use client";
import { useEffect } from "react";
const ScrollProgess = () => {
  useEffect(() => {
    const target = document.querySelector(".scroll-width");
    const document_height = document.documentElement.scrollHeight;
    const viewport_height = document.documentElement.clientHeight;

    window.onscroll = () => {
      let percentage_scrolled =
        (scrollY / (document_height - viewport_height)) * 100;
      target.style.width = percentage_scrolled + "%";
    };
  }, []);
  return (
    <div className="scroll-width  fixed z-30  h-1 top-0 left-0 bg-[#3568ff]"></div>
  );
};

export default ScrollProgess;
