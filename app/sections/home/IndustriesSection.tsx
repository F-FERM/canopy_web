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
}

// ── Icon map ───────────────────────────────────────────────────────────────
const ICON_IMAGE_MAP: Record<string, StaticImageData> = {
  Construction: Vector1,
  Home: Vector2,
  ShoppingBag: Vector3,
  Briefcase: Vector4,
};

function resolveImage(icon: string): StaticImageData {
  return ICON_IMAGE_MAP[icon] ?? Vector1;
}

// ── Skeleton ───────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="w-full h-[220px] md:h-[260px] xl:h-[291px] rounded-[10px] bg-white/10 animate-pulse" />
  );
}

// ── Component ──────────────────────────────────────────────────────────────
export default function IndustriesSection() {
  const [data, setData] = useState<IndustriesSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listIndustriesApi({});
        setData(res?.[0] ?? null);
      } catch (err) {
        setError("Failed to load industries");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const industries = data?.industries.filter((i) => i.isActive) ?? [];

  return (
    <section className="relative bg-[#7F220E] overflow-hidden py-10 md:py-16 xl:py-20 px-4 md:px-8 lg:px-12 xl:px-40">
      <div className="relative z-10 max-w-[1920px] mx-auto">

        {/* HEADER */}
        <div className="mb-8 md:mb-10 xl:mb-10 px-0 md:px-4 lg:px-8 xl:px-[120px]">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <span className="w-[18px] h-[18px] md:w-[21px] md:h-[21px] rounded-full border border-[#F26A23] text-[#F26A23] flex items-center justify-center text-[10px]">
              ⊙
            </span>
            <p className="text-[#F26A23] uppercase tracking-[2px] text-[11px] md:text-[13px] font-semibold">
              {loading ? (
                <span className="inline-block w-16 h-3 bg-orange-300/30 rounded animate-pulse" />
              ) : (
                data?.badgeText ?? "Our Reach"
              )}
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-[24px] md:text-[38px] lg:text-[46px] xl:text-[56px] font-bold leading-tight text-white">
            {loading ? (
              <span className="inline-block w-40 h-8 bg-white/10 rounded animate-pulse" />
            ) : (
              <>
                {data?.heading}{" "}
                <span className="text-[#F26A23]">{data?.headingHighlight}</span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-[13px] md:text-[15px] max-w-[600px] mt-3">
            {loading ? (
              <span className="inline-block w-72 h-4 bg-white/10 rounded animate-pulse" />
            ) : (
              data?.description
            )}
          </p>

          {error && <p className="text-red-300 mt-2 text-sm">{error}</p>}
        </div>

        {/* GRID */}
        <div className="px-0 md:px-4 lg:px-8 xl:px-[120px]">
          <div
            className="
              grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8
            "
          >
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : industries.map((industry, index) => (
                  <div
                    key={index}
                    className="
                      w-full
                      min-h-[220px] md:min-h-[260px] xl:h-[291px]

                      flex flex-col md:flex-row

                      /* 🔥 FIX FOR 1274px–1396px */
                      [@media(min-width:1274px)_and_(max-width:1396px)]:flex-col
                      [@media(min-width:1274px)_and_(max-width:1396px)]:items-start

                      gap-4 md:gap-6

                      p-5 md:p-6 lg:p-7

                      border border-[#A52A2A]
                      bg-[#8B0000]/30 backdrop-blur-sm
                      rounded-[10px]

                      transition-all duration-300
                      hover:bg-[#8B0000]/50 hover:shadow-lg
                    "
                  >
                    {/* TEXT */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-[17px] md:text-[18px] lg:text-[20px] font-semibold text-white mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-[13px] md:text-[14px] text-[#9F9F9F] leading-relaxed">
                        {industry.description}
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div
                      className="
                        relative flex-shrink-0
                        w-[130px] h-[130px]
                        md:w-[170px] md:h-[170px]
                        lg:w-[200px] lg:h-[200px]

                        /* FIX IMAGE OVERFLOW RANGE */
                        [@media(min-width:1274px)_and_(max-width:1396px)]:w-[150px]
                        [@media(min-width:1274px)_and_(max-width:1396px)]:h-[150px]

                        opacity-80 hover:opacity-100 transition-opacity
                      "
                    >
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