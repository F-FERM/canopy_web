"use client";

import { Building2, Home, ShoppingBag, Briefcase } from "lucide-react";

interface Industry {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function IndustriesSection() {
  const industries: Industry[] = [
    {
      title: "Construction Sites",
      description:
        "Protecting valuable equipment and materials on active job sites.",
      icon: <Building2 className="w-16 h-16" />,
    },
    {
      title: "Residential Communities",
      description:
        "Ensuring safe living environments for homeowners and residents.",
      icon: <Home className="w-16 h-16" />,
    },
    {
      title: "Shopping Centers",
      description:
        "Providing visible security presence in retail and high-traffic environments.",
      icon: <ShoppingBag className="w-16 h-16" />,
    },
    {
      title: "Corporate Offices",
      description:
        "Protecting employees, visitors, and sensitive business assets.",
      icon: <Briefcase className="w-16 h-16" />,
    },
  ];

  return (
    <section className="relative bg-[#7A0012] overflow-hidden py-28 px-4 sm:px-8">
      <div className="relative z-10 max-w-[1920px] mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-20 px-6 lg:px-[120px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[3px] text-sm font-semibold">
              Our Reach
            </p>
          </div>

          <h2 className="text-[42px] md:text-[56px] font-bold leading-tight text-white">
            Industries <span className="text-[#F97316]">We Serve</span>
          </h2>

          <p className="text-gray-300 text-[16px] leading-relaxed mt-4 max-w-[600px]">
            Our security solutions span across a wide range of industries,
            providing tailored protection for every environment.
          </p>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="px-6 lg:px-[120px]">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-2
              gap-8
              max-w-[800px]
            "
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="
                  relative
                  p-8
                  rounded-lg
                  border
                  border-[#A52A2A]
                  bg-[#8B0000]/30
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#F97316]
                  hover:bg-[#8B0000]/50
                  hover:shadow-lg
                  group
                "
              >
                {/* ICON */}
                <div className="mb-6 text-[#F97316] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {industry.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-[20px] font-bold text-white mb-3 leading-tight">
                  {industry.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[14px] leading-[1.7] text-gray-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
