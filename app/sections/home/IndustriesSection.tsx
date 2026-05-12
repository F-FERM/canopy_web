"use client";

import { Home, ShoppingBag, Briefcase } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Vector1 from "../../../public/images/home/Vector1.png"
import Vector2 from "../../../public/images/home/Vector2.png"
import Vector3 from "../../../public/images/home/Vector3.png"
import Vector4 from "../../../public/images/home/Vector4.png"
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
      image: Vector1
    },
    {
      title: "Shopping Centers",
      description:
        "Providing visible security presence in retail and high-traffic environments.",
      image: Vector1,
    },
    {
      title: "Corporate Offices",
      description:
        "Protecting employees, visitors, and sensitive business assets.",
      image: Vector1,
    },
  ];

  return (
    <section className="relative bg-[#7A0012] overflow-hidden pt-20 px-4 sm:px-8 lg:px-40">
      <div className="relative z-10 max-w-[1920px] mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-10 px-6 lg:px-[120px]">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="
                  relative pl-8 pt-8 pb-5 rounded-lg border border-[#A52A2A]
                  bg-[#8B0000]/30 backdrop-blur-sm transition-all duration-300
                  hover:border-[#F97316] hover:bg-[#8B0000]/50 hover:shadow-lg group
                "
              >
                <div className="flex items-center justify-between gap-6">
                  {/* LEFT SIDE - TEXT CONTENT */}
                  <div className="flex-1">
                    <h3 className="text-[20px] font-semibold text-white mb-3 leading-tight">
                      {industry.title}
                    </h3>
                    <p className="text-[16px] leading-[1.7] text-[#9F9F9F] font-normal">
                      {industry.description}
                    </p>
                  </div>

                  {/* RIGHT SIDE - ICON */}
                  <div className="flex-shrink-0  opacity-70 group-hover:opacity-100 transition-opacity duration-300  ">
                    <Image src={industry.image} alt={industry.title} width={200} height={193}  />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}