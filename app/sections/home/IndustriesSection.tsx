"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Vector1 from "../../../public/images/home/Vector1.png";
import Vector2 from "../../../public/images/home/Vector2.png";
import Vector3 from "../../../public/images/home/Vector3.png";
import Vector4 from "../../../public/images/home/Vector4.png";
import { listIndustriesApi } from "@/app/api/HomeIndustry";

// ── API types ──────────────────────────────────────────────────────────────
interface Industry {
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
}

interface IndustriesSectionData {
  _id: string;
  badgeText: string;
  heading: string;
  headingHighlight: string;
  description: string;
  industries: Industry[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// ── Icon string → Vector image map ────────────────────────────────────────
const ICON_IMAGE_MAP: Record<string, StaticImageData> = {
  Construction: Vector1,
  Home:         Vector2,
  ShoppingBag:  Vector3,
  Briefcase:    Vector4,
};

function resolveImage(icon: string): StaticImageData {
  return ICON_IMAGE_MAP[icon] ?? Vector1;
}

// ── Skeleton card ──────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="w-full max-w-[705px] mx-auto md:mx-0 h-[220px] sm:h-[250px] md:h-[270px] lg:h-[291px] rounded-[10px] bg-white/10 animate-pulse" />
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function IndustriesSection() {
  const [data, setData] = useState<IndustriesSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 // ── Fetch API data ────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await listIndustriesApi({});
        console.log(data, "herodata");
        setData(data?.[0] ?? null);
      } catch (error) {
        console.error("HeroSection API error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroData();
  }, []);

  // Only active industries
  const industries = data?.industries.filter((i) => i.isActive) ?? [];

  return (
    <section className="relative bg-[#6B0F1A] overflow-hidden pt-10 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40 pb-10 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-20">
      <div className="relative z-10 max-w-[1920px] mx-auto">

        {/* ── SECTION HEADER ────────────────────────────────────────────── */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-10 px-0 sm:px-2 md:px-6 lg:px-16 xl:px-[120px]">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-3 sm:mb-3 md:mb-4 xl:mb-4">
            <span className="flex items-center justify-center w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[21px] md:h-[21px] xl:w-[22px] xl:h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[9px] sm:text-[10px] md:text-[10.5px] xl:text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] xl:tracking-[3px] text-[11px] sm:text-[12px] md:text-[13px] xl:text-sm font-semibold">
              {loading ? (
                <span className="inline-block w-16 sm:w-20 h-3 bg-orange-300/30 rounded animate-pulse" />
              ) : (
                data?.badgeText ?? "Our Reach"
              )}
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold leading-tight text-white">
            {loading ? (
              <span className="inline-block w-40 sm:w-48 h-8 sm:h-10 bg-white/10 rounded animate-pulse" />
            ) : (
              <>
                {data?.heading ?? "Industries"}{" "}
                <span className="text-[#F97316]">
                  {data?.headingHighlight ?? "We Serve"}
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-relaxed mt-2 sm:mt-3 md:mt-3 xl:mt-4 max-w-[100%] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[580px] xl:max-w-[600px]">
            {loading ? (
              <span className="inline-block w-64 sm:w-80 h-4 sm:h-5 bg-white/10 rounded animate-pulse" />
            ) : (
              data?.description ??
              "Our security solutions span across a wide range of industries, providing tailored protection for every environment."
            )}
          </p>

          {error && <p className="mt-3 text-sm text-red-300">⚠ {error}</p>}
        </div>

        {/* ── INDUSTRIES GRID ───────────────────────────────────────────── */}
        <div className="px-0 sm:px-2 md:px-6 lg:px-16 xl:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">

            {loading
              ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
              : industries.map((industry, index) => (
                  <div
                    key={index}
                    className="
                      w-full
                      max-w-[705px]
                      mx-auto md:mx-0
                      h-auto
                      min-h-[220px] sm:min-h-[250px] md:min-h-[270px] lg:min-h-[285px] xl:h-[291px]
                      rounded-[8px] sm:rounded-[9px] md:rounded-[10px] xl:rounded-[10px]
                      pb-5 sm:pb-6 md:pb-7 lg:pb-10 xl:pb-[12px]
                      pl-5 sm:pl-8 md:pl-10 lg:pl-12 xl:pl-[65px]
                      pr-3 sm:pr-4 md:pr-5 lg:pr-6 xl:pr-0
                      pt-5 sm:pt-6 md:pt-7 lg:pt-8 xl:pt-0
                      border
                      flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-0
                      border-[#A52A2A] bg-[#8B0000]/30 backdrop-blur-sm
                      transition-all duration-300
                      hover:border-gray-400 hover:bg-[#8B0000]/50 hover:shadow-lg group
                    "
                  >
                    {/* LEFT SIDE — TEXT CONTENT */}
                    <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                      <h3 className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-[19.5px] xl:text-[20px] font-semibold text-white mb-1.5 sm:mb-2 md:mb-2.5 xl:mb-3 leading-tight">
                        {industry.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-[1.5] sm:leading-[1.55] md:leading-[1.6] lg:leading-[1.65] xl:leading-[1.7] text-[#9F9F9F] font-normal">
                        {industry.description}
                      </p>
                    </div>

                    {/* RIGHT SIDE — IMAGE */}
                    <div className="flex-shrink-0 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px] xl:w-[260px] xl:h-[260px] relative opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={resolveImage(industry.icon)}
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