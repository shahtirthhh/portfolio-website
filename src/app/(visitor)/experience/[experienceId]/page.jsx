// import ImageFullScreen from "@/components/UI/ImageFullScreen";
import ImageOnClick from "@/components/UI/ImageOnClick";
import experiences from "@/data/experiences";
import Link from "next/link";
import { notFound } from "next/navigation";

const ExperienceDetails = ({ params }) => {
  const experience = experiences.find((ex) => ex.id === params.experienceId);
  if (!experience) notFound();
  return (
    <div className="flex gap-10 sm:gap-16  w-full flex-col sm:p-8 p-4 mt-10">
      {/* Other links */}
      <div className="flex flex-row gap-4  absolute top-2 right-2">
        {experiences.map((experience) => (
          <Link
            href={`/experience/${experience.id}`}
            className="underline underline-offset-2 sm:text-sm text-[0.6rem] text-blue-400 hover:text-blue-600 font-primary"
          >
            {experience.title}
          </Link>
        ))}
      </div>
      {/* Head section */}
      <div className="flex flex-col gap-2">
        <h1 className="font-SFPro lg:text-6xl md:text-4xl text-3xl sm:text-left text-primaryText">
          {experience.title}
        </h1>
        <p className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
          {`${experience.company}  ~  ${experience.duration}`}
        </p>
      </div>
      {/* Techstack section */}
      <div className="flex flex-wrap gap-4">
        {experience.techstack.map((tech) => (
          <p className="px-3 py-1 sm:text-base rounded-md font-primary bg-secondary shadow-md">
            {tech}
          </p>
        ))}
      </div>
      {/* Tasks section */}
      <div className="flex flex-col gap-4">
        {experience.tasks.map((task) => (
          <p className="font-primary sm:text-lg text-xs">- {task}</p>
        ))}
      </div>

      <ImageOnClick
        src={experience.certtificate}
        buttonText={"🚀 view certificate"}
      />
    </div>
  );
};

export default ExperienceDetails;
