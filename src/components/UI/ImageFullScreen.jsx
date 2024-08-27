"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImageFullScreen = ({ src, divClass, imageClass }) => {
  const imageContainer = useRef();
  const image = useRef();
  const [isFullScreen, setIsFullScreen] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imageContainer.current, {
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
      scale: 1,
      x: 0,
      opacity: 1,
      ease: "power1.out",
    });
  });

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);

    if (!isFullScreen) {
      gsap.to(image.current, {
        scale: 2,

        zIndex: 9999,
        duration: 1.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(image.current, {
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 10,
        duration: 1.5,
        ease: "power4.out",
      });
    }
  };

  return (
    <div
      className={`${
        isFullScreen
          ? "transition-all duration-200 w-screen h-[calc(100dvh)] flex justify-center items-center z-[100] fixed left-0 top-0 bg-black/30 backdrop-blur-md"
          : "transition-all duration-200"
      }`}
    >
      <div
        ref={imageContainer}
        className={`translate-x-40 scale-[0.9] opacity-0  relative ${divClass} flex justify-center items-center border border-white`}
      >
        <Image
          ref={image}
          id="image"
          src={src}
          className={`z-10 cursor-pointer rounded-md shadow-md ${imageClass}`}
          onClick={toggleFullScreen}
          fill
          alt="smlImg"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default ImageFullScreen;
