"use client";
import certificates from "@/data/certificates";
import ImageFullScreen from "../UI/ImageFullScreen";
import certificate from "../../../public/assets/certificate.gif";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const CertificatesSection = () => {
  const certificate_title = useRef([]);
  const certificate_core = useRef([]);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#certificate_heading", {
      scrollTrigger: {
        trigger: "#certificate_heading",
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
    animateElements(certificate_title.current);
    animateElements(certificate_core.current);
  }, [certificates]);
  return (
    <div id="certificates" className="p-4 flex flex-col gap-32">
      <div
        id="certificate_heading"
        className="bg-primary pt-4 sticky top-0 w-full flex flex-row justify-center items-center  scale-[2] gap-6"
      >
        <Image src={certificate} className="w-8 h-8 " alt="ex" />
        <p className="font-primary text-center  italic font-medium  lg:text-xl md:text-base text-sm  text-primaryText">
          Certificates
        </p>
      </div>
      {certificates.map((certificate, index) => (
        // Single entry
        <div
          key={certificate.title}
          className="flex sm:flex-row flex-col justify-between sm:p-6 p-3 gap-6"
        >
          {/* Heading section */}
          <div className="on-scroll-normal  flex flex-col justify-between h-fit items-start gap-1">
            <h1
              ref={(el) => (certificate_title.current[index] = el)}
              className="translate-x-40 scale-[0.9] opacity-0  font-SFPro lg:text-4xl md:text-3xl text-2xl sm:text-left text-primaryText"
            >
              {certificate.title}
            </h1>
            <p
              ref={(el) => (certificate_core.current[index] = el)}
              className="translate-x-40 scale-[0.9] opacity-0 lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText"
            >
              {certificate.core}
            </p>
          </div>

          <ImageFullScreen
            id={certificate.title}
            divClass={"md:w-[32rem] md:h-[16rem] w-[16rem] h-[8rem]"}
            src={certificate.image}
          ></ImageFullScreen>
        </div>
      ))}
    </div>
  );
};

export default CertificatesSection;
