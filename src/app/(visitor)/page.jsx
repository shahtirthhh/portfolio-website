import CertificatesSection from "@/components/visitor/CertificatesSection";
import ExperienceSection from "@/components/visitor/ExperienceSection";
import HeroSection from "@/components/visitor/HeroSection";
import ProjectsSection from "@/components/visitor/ProjectsSection";
import PublicationsSection from "@/components/visitor/PublicationsSection";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-16 w-full overflow-y-auto overflow-x-hidden custom_scroll">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
      <CertificatesSection />
    </div>
  );
};

export default MainPage;
