import SecurityHeroSection from "@/app/sections/service/SecurityHeroSection";
import SecurityServicesSection from "@/app/sections/service/SecurityServicesSection";
import IndustriesSection from "@/app/sections/service/IndustriesSection";
import ProcessSection from "@/app/sections/service/ProcessSection";

const page = () => {
  return (
    <>
      <SecurityHeroSection />
      <SecurityServicesSection />
      <IndustriesSection />
      <ProcessSection />
    </>
  );
};

export default page;
