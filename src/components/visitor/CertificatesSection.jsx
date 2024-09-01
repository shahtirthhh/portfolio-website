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
    gsap.to("#certificates_heading", {
      scrollTrigger: {
        trigger: "#certificates_heading",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
      scale: 1.3,
      ease: "power1.out",
    });
    gsap.to("#certificates_heading_inner", {
      scrollTrigger: {
        trigger: "#certificates_heading_inner",
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
    animateElements(certificate_title.current);
    animateElements(certificate_core.current);
  }, [certificates]);
  return (
    <div id="certificates" className="p-4 flex items-center flex-col gap-32">
      <div
        id="certificates_heading"
        className="bg-primary pt-4 sticky md:top-16 top-0 z-[28] md:w-[50vw] py-2 w-full flex flex-row justify-center items-center  scale-[2] gap-6"
      >
        <Image src={certificate} className="w-6 h-6" alt="ex" />
        <p
          id="certificates_heading_inner"
          className="font-sans text-center  italic font-medium  lg:text-base md:text-sm text-xs  text-primaryText"
        >
          Certifications
        </p>
      </div>
      {certificates.map((certificate, index) => (
        // Single entry
        <div
          key={certificate.title}
          className="flex flex-col justify-between sm:p-6 p-3 gap-6"
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
