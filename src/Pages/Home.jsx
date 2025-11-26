import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { MoreAboutMe } from "../components/MoreAboutMe";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    <StarBackground />
    <Navbar />
    <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <MoreAboutMe/>
        <ContactSection />
    </main>
    <Footer />
  </div>
  );
};