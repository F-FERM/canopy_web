import React from "react";

interface Benefit {
  id: number;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Industry Experts",
    description: "Learn directly from trained security specialists.",
  },
  {
    id: 2,
    title: "Practical Training",
    description: "Gain knowledge through live demonstrations.",
  },
  {
    id: 3,
    title: "Networking",
    description: "Meet facility managers and security professionals.",
  },
  {
    id: 4,
    title: "Certification",
    description: "Selected programs include participation certificates.",
  },
];

const WhyAttendSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-orange-500 font-semibold text-sm md:text-sm tracking-widest mb-2">
            WHY
          </p>
          <h2 className="text-4xl md:text-3xl font-bold">
            <span className="text-gray-900">Why Attend Our</span>
            <br />
            <span className="text-orange-500">Events</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 px-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-4 md:p-10 rounded-2xl bg-gradient-to-br from-red-800 to-red-900 text-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl md:text-2xl font-bold mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 text-base md:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
