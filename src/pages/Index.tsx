import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import FloatingIcons from "@/components/FloatingIcons";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen relative">
      <ScrollProgress />
      <FloatingIcons />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper>
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper>
        <SkillsSection />
      </SectionWrapper>
      <SectionWrapper>
        <ExperienceSection />
      </SectionWrapper>
      <SectionWrapper>
        <EducationSection />
      </SectionWrapper>
      <SectionWrapper>
        <CertificationsSection />
      </SectionWrapper>
      <SectionWrapper>
        <CodingProfilesSection />
      </SectionWrapper>
      <SectionWrapper>
        <ContactSection />
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export default Index;
