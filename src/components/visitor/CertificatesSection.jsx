import certificates from "@/data/certificates";
import ImageFullScreen from "../UI/ImageFullScreen";

const CertificatesSection = () => {
  return (
    <div id="certificates" className="p-4 flex flex-col gap-10">
      <div className="on-scroll-normal flex flex-row items-center gap-5">
        <p className="w-full h-[0.5px] bg-slate-200"></p>
        <h1 className="font-primary whitespace-nowrap italic font-normal lg:text-lg md:text-base text-sm  text-primaryText">
          🎓 Certificates
        </h1>
      </div>
      {certificates.map((certificate) => (
        // Single entry
        <div
          key={certificate.title}
          className="on-scroll-normal flex sm:flex-row flex-col justify-between sm:p-6 p-3 gap-6"
        >
          {/* Heading section */}
          <div className="flex flex-col justify-between h-fit items-start gap-1">
            <h1 className=" font-SFPro lg:text-4xl md:text-3xl text-2xl sm:text-left text-primaryText">
              {certificate.title}
            </h1>
            <p className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
              {certificate.core}
            </p>
          </div>

          <ImageFullScreen
            divClass={"w-[17rem] h-[9rem]"}
            src={certificate.image}
          ></ImageFullScreen>
        </div>
      ))}
    </div>
  );
};

export default CertificatesSection;
