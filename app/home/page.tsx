"use client"
import Pattern from "../../public/images/home/HomePattern1.png";
import Shield from "../../public/images/home/SideLogo.png";
import SlidingImage1 from "../../public/images/home/SlidingImage1.jpg";
import SlidingImage2 from "../../public/images/home/SlidingImage2.png";
import SlidingImage3 from "../../public/images/home/SlidingImage3.png";
import SlidingImage4 from "../../public/images/home/SlidingImage4.jpg";
import AboutSection from "../sections/home/AboutSection";
import BlogSection from "../sections/home/BlogSection";
import CTASection from "../sections/home/CTASection";
import HeroSection from "../sections/home/HeroSection";
import IndustriesSection from "../sections/home/IndustriesSection";
import ServicesSection from "../sections/home/ServicesSection";
import StatsSection from "../sections/home/StatsSection";
import WhyChooseUsSection from "../sections/home/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
<HeroSection />
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
