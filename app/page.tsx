import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { FixedSocialLinks } from "@/components/fixed-social-links";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import {
  EducationSection,
  ProjectsSection,
} from "@/components/projects-education-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FixedSocialLinks />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
