import projects from "@/data/projects";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <div id="projects" className="p-4 flex flex-col gap-10">
      <div className="flex flex-row items-center gap-5">
        <p className="w-full h-[0.5px] bg-slate-200"></p>
        <h1 className="font-primary whitespace-nowrap italic font-normal lg:text-lg md:text-base text-sm  text-primaryText">
          💻 Projects
        </h1>
      </div>
      {projects.map((project) => (
        // Single entry
        <div
          key={project.id}
          className="flex sm:flex-row flex-col justify-between sm:p-6 p-3 gap-6"
        >
          {/* Heading section */}
          <div className="flex flex-col justify-between h-fit items-start gap-1">
            <h1 className="btn-shine font-SFPro lg:text-4xl md:text-3xl text-2xl sm:text-left text-primaryText">
              {project.title}
            </h1>
            <p className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
              {project.core}
            </p>
            <Link
              href={"/projects/" + project.id}
              className="know-more sm:flex hidden font-primary sm:text-xs text-sm underline underline-offset-2"
            >
              <span>Know more</span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="green"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex sm:flex-row flex-col  justify-between sm:items-center items-start gap-2  ">
            <video
              src={project.video}
              poster={project.images[0]}
              controls
              className="rounded-md shadow-md sm:w-96 "
            ></video>

            <Link
              href={"/projects/" + project.id}
              className="know-more sm:hidden flex font-primary sm:text-xs text-sm underline underline-offset-2"
            >
              <span>Know more</span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="green"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
