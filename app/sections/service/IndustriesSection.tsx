import React from "react";

interface IndustryCard {
  id: number;
  title: string;
  icon: string;
}

const industries: IndustryCard[] = [
  {
    id: 1,
    title: "Hospitality & Hotels",
    icon: "🏨",
  },
  {
    id: 2,
    title: "Residential & Commercial Estate",
    icon: "🏢",
  },
  {
    id: 3,
    title: "Government & Public Institutions",
    icon: "🏛️",
  },
  {
    id: 4,
    title: "Government & Public Institutions",
    icon: "🏛️",
  },
  {
    id: 5,
    title: "Workplace Facilities",
    icon: "🏢",
  },
  {
    id: 6,
    title: "Construction & Industrial Projects",
    icon: "🏗️",
  },
  {
    id: 7,
    title: "Corporate Offices & Campuses",
    icon: "🏢",
  },
  {
    id: 8,
    title: "Manufacturing & Industrial Facilities",
    icon: "🏭",
  },
  {
    id: 9,
    title: "Cultural Institutions",
    icon: "🎭",
  },
  {
    id: 10,
    title: "Banks & Exchange Houses",
    icon: "🏦",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Grid of Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:border-orange-300 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl md:text-2xl mb-3">{industry.icon}</div>

              {/* Title */}
              <h3 className="text-center text-sm md:text-sm font-semibold text-gray-900 leading-tight">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
