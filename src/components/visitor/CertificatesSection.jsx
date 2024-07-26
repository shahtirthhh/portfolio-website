import certificates from "@/data/certificates";
import Image from "next/image";

const CertificatesSection = () => {
  return (
    <div id="certificates" className="p-4 flex flex-col gap-10">
      <div className="flex flex-row items-center gap-5">
        <p className="w-full h-[0.5px] bg-slate-200"></p>
        <h1 className="font-primary whitespace-nowrap italic font-normal lg:text-lg md:text-base text-sm  text-primaryText">
          🎓 Certificates
        </h1>
      </div>
      {certificates.map((certificate) => (
        // Single entry
        <div className="flex sm:flex-row flex-col justify-between sm:p-6 p-3 gap-6">
          {/* Heading section */}
          <div className="flex flex-col justify-between h-fit items-start gap-1">
            <h1 className="btn-shine font-SFPro lg:text-4xl md:text-3xl text-2xl sm:text-left text-primaryText">
              {certificate.title}
            </h1>
            <p className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
              {certificate.core}
            </p>
          </div>
          <div className="relative sm:w-[30rem] w-[15rem] sm:h-[20rem] h-[10rem]">
            <Image
              src={certificate.image}
              className="rounded-md shadow-md sm:w-96"
              fill
            ></Image>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatesSection;
