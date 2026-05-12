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

      <HeroSection
        badgeText="Trusted Security Partner"
        badgeIcon={Shield}
        heading={"Highly Trained &\nExperienced"}
        headingHighlight="Security Services"
        subtext="Providing professional security solutions to protect people, property, and businesses with trained and reliable security personnel."
        buttons={[
        { label: "Explore", href: "/services", variant: "primary" },
        { label: "Contact", href: "/contact", variant: "outline" },
      ]}

      // ── Image carousel ─────────────────────────────────────────────────
      slides={[
        {
          image: SlidingImage1,
          title: "General Security",
          description:
            "Trained security personnel providing 24/7 protection, access control, patrolling, and risk prevention.",
        },
        {
          image: SlidingImage2,
          title: "Event Security",
          description:
            "Professional crowd management and perimeter control for events of any scale.",
        },
        {
          image: SlidingImage3,
          title: "Corporate Security",
          description:
            "Dedicated security teams safeguarding offices, data centres, and executive personnel.",
        },
        {
          image: SlidingImage4,
          title: "Mobile Patrols",
          description:
            "Rapid-response mobile units covering wide areas with frequent, unpredictable patrols.",
        },
      ]}
      slideInterval={3000}

      // ── Visual options ─────────────────────────────────────────────────
      patternImage={Pattern}
      accentColor="#F26A23"   
    />
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
