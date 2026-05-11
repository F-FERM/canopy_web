import SecurityHero from "../components/layout/SecurityHero";
import AboutSection from "../sections/home/AboutSection";
import StatsSection from "../sections/home/StatsSection";
import ServicesSection from "../sections/home/ServicesSection";
import WhyChooseUsSection from "../sections/home/WhyChooseUsSection";
import IndustriesSection from "../sections/home/IndustriesSection";
import BlogSection from "../sections/home/BlogSection";
import CTASection from "../sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <SecurityHero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
