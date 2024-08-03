import projects from "@/data/projects";
import ImageSlider from "@/components/UI/ImageSlider";
import { notFound } from "next/navigation";
import Image from "next/image";
import github from "../../../../../public/assets/github.png";
const ProjectDetails = ({ params }) => {
  const project = projects.find((project) => project.id === params.projectId);
  if (!project) notFound();

  return (
    <div className="flex gap-10 w-full flex-col sm:p-8 p-4 overflow-y-auto custom_scroll">
      {/* Head section */}
      <div className="flex flex-col gap-2">
        <h1 className="font-SFPro lg:text-6xl md:text-4xl text-3xl sm:text-left text-primaryText">
          {project.title}
        </h1>
        <p className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
          {`${project.core}`}
        </p>
      </div>
      {/* Media section */}
      <div className="w-full flex sm:flex-row flex-col gap-5">
        <video
          src={project.video}
          controls
          poster={project.images[1]}
          className="sm:w-1/2 w-full rounded-md"
        ></video>
        <div className="sm:w-1/2 w-full flex justify-center items-center">
          <ImageSlider images={project.images} />
        </div>
      </div>
      {/* Techstack section */}
      <div className="flex flex-wrap gap-4">
        {project.techstack.map((tech) => (
          <p
            key={tech}
            className="px-3 py-1 sm:text-base text-xs rounded-md font-primary bg-secondary shadow-md"
          >
            {tech}
          </p>
        ))}
      </div>
      {/* Tasks section */}
      <div className="flex flex-col gap-4">
        {project.tasks.map((task) => (
          <p key={task} className="font-primary sm:text-lg text-xs">
            - {task}
          </p>
        ))}
      </div>
      {/* Links section */}
      <div className="flex flex-row flex-wrap gap-4 w-full justify-evenly">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2">
            <Image src={github} width={21} height={21} />
            <p className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
              Github links
            </p>
          </div>
          {Object.keys(project.github).map((name) => (
            <a
              href={project.github[name]}
              key={name}
              className="font-primary sm:text-base text-xs underline underline-offset-2 text-blue-400"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
            🔗 Live demo
          </p>
          {Object.keys(project.live).map((name) => (
            <a
              href={project.live[name]}
              key={name}
              className="font-primary sm:text-base text-xs underline underline-offset-2 text-blue-400"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
