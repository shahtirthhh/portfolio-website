import Image from "next/image";

import profile from "../../../public/assets/profile-pic.png";
import linkedin from "../../../public/assets/linkedin.png";
import github from "../../../public/assets/github.png";
import leetcode from "../../../public/assets/leetcode.png";
import x from "../../../public/assets/x.png";

const HeroSection = () => {
  return (
    <div className="p-7 flex flex-col items-center gap-8" id="hero">
      <div className="flex sm:flex-row flex-col  justify-center items-center gap-8">
        <div className="relative sm:w-56 sm:h-56 w-44 h-44 shadow-lg rounded-full">
          <Image src={profile} priority fill />
        </div>
        <div className="flex flex-col">
          <p className="sm:text-5xl text-2xl sm:text-left text-center whitespace-pre-line text-primaryText  font-SFPro">
            {"⚡ Full stack developer, \npart time data engineer"}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 items-center">
        <a
          target="_blank"
          title="LinkedIn profile"
          className="hover:scale-[1.04] transition-all"
          href="https://www.linkedin.com/in/shahtirthh/"
        >
          <Image
            src={linkedin}
            className="w-10 sm:w-12 sm:h-12 h-10"
            priority
          />
        </a>
        <a
          target="_blank"
          title="Github profile"
          className="hover:scale-[1.04] transition-all"
          href="https://github.com/shahtirthhh"
        >
          <Image src={github} priority className="w-10 sm:w-12 sm:h-12 h-10" />
        </a>
        <a
          target="_blank"
          title="Leetcode profile"
          className="hover:scale-[1.04] transition-all"
          href="https://leetcode.com/u/shahtirthhh/"
        >
          <Image
            src={leetcode}
            className="w-9  sm:w-12 sm:h-12 h-9 rounded-full"
            priority
          />
        </a>
        <a
          target="_blank"
          title="X profile"
          className="hover:scale-[1.04] transition-all"
          href="https://leetcode.com/u/shahtirthhh/"
        >
          <Image src={x} className="w-10 sm:w-12 sm:h-12 h-10" priority />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
