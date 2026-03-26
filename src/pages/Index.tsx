import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CategoriesSection />
      <FooterSection />
    </main>
  );
};

export default Index;
