import ExcellenceSection from "@/app/components/about/ExcellenceSection";
import WelcomeSection from "@/app/components/about/WelcomeSection";
import WhyChooseSection from "@/app/components/about/WhyChooseSection";

const page = () => {
  return (
    <div>
      <WelcomeSection />
      <ExcellenceSection />
      <WhyChooseSection />
    </div>
  );
};

export default page;
