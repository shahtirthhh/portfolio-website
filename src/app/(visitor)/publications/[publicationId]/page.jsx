import publications from "@/data/publications";

const PublicationDetails = ({ params }) => {
  const publication = publications.find(
    (publication) => publication.id === params.publicationId
  );
  if (!publication) notFound();
  return (
    <div className="flex sm:flex-row gap-10 w-full flex-col sm:p-8 p-4">
      <div className="flex flex-col  gap-10 sm:gap-16 ">
        {/* Head section */}
        <div className="flex flex-col gap-2">
          <h1 className="font-SFPro lg:text-6xl md:text-4xl text-3xl sm:text-left text-primaryText">
            {publication.title} ~ {publication.year}
          </h1>
          <p className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
            {`${publication.subject}`}
          </p>
        </div>
        {/* Tasks section */}
        <div className="flex flex-col gap-4">
          {publication.tasks.map((task) => (
            <p className="font-primary sm:text-lg text-xs">- {task}</p>
          ))}
        </div>
        {/* Authors section */}
        <div className="flex flex-col gap-2">
          <h1 className="lg:text-base md:text-sm text-xs font-medium italic font-primary text-primaryText">
            ✍🏻 Authors
          </h1>
          <div className="flex flex-wrap gap-4">
            {publication.authors.map((author) => (
              <p className="px-3 py-1 sm:text-base text-xs rounded-md font-primary bg-secondary shadow-md">
                {author}
              </p>
            ))}
          </div>
        </div>
        <a
          href={publication.link}
          className="font-primary sm:text-base text-xs underline underline-offset-2 text-blue-400"
        >
          🚀 view paper here
        </a>
      </div>
      {/* Certificate section  */}
      {/* <ImageFullScreen
    src={experience.certtificate}
    imageClass={""}
    divClass={"sm:w-[30rem] w-[15rem] sm:h-full h-[15rem]"}
  /> */}
    </div>
  );
};

export default PublicationDetails;
