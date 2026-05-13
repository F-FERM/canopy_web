"use client";

import Image, { StaticImageData } from "next/image";
import Vector1 from "../../../public/images/home/Vector1.png";
import Vector2 from "../../../public/images/home/Vector2.png";
import Vector3 from "../../../public/images/home/Vector3.png";
import Vector4 from "../../../public/images/home/Vector4.png";

interface Industry {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function IndustriesSection() {
  const industries: Industry[] = [
    {
      title: "Construction Sites",
      description:
        "Protecting valuable equipment and materials on active job sites.",
      image: Vector1,
    },
    {
      title: "Residential Communities",
      description:
        "Ensuring safe living environments for homeowners and residents.",
      image: Vector2,
    },
    {
      title: "Shopping Centers",
      description:
        "Providing visible security presence in retail and high-traffic environments.",
      image: Vector3,
    },
    {
      title: "Corporate Offices",
      description:
        "Protecting employees, visitors, and sensitive business assets.",
      image: Vector4,
    },
  ];

  return (
    <section className="relative bg-[#6B0F1A] overflow-hidden pt-12 sm:pt-16 md:pt-18 lg:pt-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 pb-12 sm:pb-16 md:pb-18 lg:pb-20">
      <div className="relative z-10 max-w-[1920px] mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-10 px-2 sm:px-4 md:px-8 lg:px-[120px]">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="flex items-center justify-center w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[10px] sm:text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[2px] sm:tracking-[3px] text-[13px] sm:text-sm font-semibold">
              Our Reach
            </p>
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px] font-bold leading-tight text-white">
            Industries <span className="text-[#F97316]">We Serve</span>
          </h2>

          <p className="text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-3 sm:mt-4 max-w-[600px]">
            Our security solutions span across a wide range of industries,
            providing tailored protection for every environment.
          </p>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="px-2 sm:px-4 md:px-8 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="
                  w-full
                  max-w-[705px]
                  mx-auto md:mx-0
                  h-auto
                  min-h-[200px] sm:min-h-[240px] md:min-h-[270px] lg:h-[291px]
                  rounded-[8px] sm:rounded-[10px]
                  pb-4 sm:pb-6 md:pb-8 lg:pb-[12px]
                  pl-4 sm:pl-8 md:pl-12 lg:pl-[65px]
                  pr-2 sm:pr-4 md:pr-6 lg:pr-0
                  pt-4 sm:pt-6 md:pt-8 lg:pt-0
                  border
                  flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-0
                  border-[#A52A2A] bg-[#8B0000]/30 backdrop-blur-sm
                  transition-all duration-300
                  hover:border-gray-400 hover:bg-[#8B0000]/50 hover:shadow-lg group
                "
              >
                {/* LEFT SIDE - TEXT CONTENT */}
                <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                  <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-white mb-2 sm:mb-3 leading-tight">
                    {industry.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] sm:leading-[1.65] md:leading-[1.7] text-[#9F9F9F] font-normal">
                    {industry.description}
                  </p>
                </div>

                {/* RIGHT SIDE - IMAGE (responsive size) */}
                <div className="flex-shrink-0 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] relative opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}