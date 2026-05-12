import React from "react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Explore our complete range of security services designed to protect your business, property, and people.",
  },
  {
    id: 2,
    title: "Site Assessment",
    description: "Our team identifies vulnerabilities and security risks.",
  },
  {
    id: 3,
    title: "Security Planning",
    description: "We create a custom protection strategy for your property.",
  },
  {
    id: 4,
    title: "Deployment",
    description: "Our trained guards and systems are deployed immediately.",
  },
];

const ProcessSection = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <p className="text-orange-500 font-semibold text-sm md:text-sm tracking-widest mb-2">
              OUR PROCESS
            </p>
            <h2 className="text-4xl md:text-4xl font-bold">
              <span className="text-gray-900">How We Secure</span>{" "}
              <span className="text-orange-500">Your</span>
              <br />
              <span className="text-orange-500">Property</span>
            </h2>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-15">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="p-8 md:p-7 rounded-2xl bg-gradient-to-br from-red-800 to-red-900 text-white hover:shadow-lg transition-shadow duration-300"
              >
                {/* Title */}
                <h3 className="text-2xl md:text-xl font-bold mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-base md:text-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#6B0F1A] h-[500px]"></div>
    </>
  );
};

export default ProcessSection;
