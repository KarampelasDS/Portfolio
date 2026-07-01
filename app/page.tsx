import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import StackSection from "@/components/StackSection/StackSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StackSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
