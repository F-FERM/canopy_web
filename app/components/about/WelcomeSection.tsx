"use client";

import { listAboutSectionApi } from "@/app/api/AboutHero";
import Image from "next/image";
import { useEffect, useState } from "react";

// ── API types ──────────────────────────────────────────────────────────────
interface Stat {
  value: string;
  label: string;
}

interface AboutUsSectionData {
  _id: string;
  badgeText: string;
  heading: string;
  headingHighlight: string;
  headingEnd: string;
  descriptions: string[];
  image: string;
  stats: Stat[];
  patternImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// ── Skeleton loader ────────────────────────────────────────────────────────
function SkeletonLoader() {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] items-start gap-10 sm:gap-12 md:gap-14 xl:gap-14 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-60 py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 mx-auto">
        <div className="w-full pt-1 sm:pt-2 md:pt-3 xl:pt-4 space-y-3 sm:space-y-4 animate-pulse">
          <div className="h-5 sm:h-6 bg-gray-200 rounded w-28 sm:w-32" />
          <div className="h-10 sm:h-12 bg-gray-200 rounded w-3/4" />
          <div className="h-10 sm:h-12 bg-gray-200 rounded w-full" />
          <div className="h-20 sm:h-24 bg-gray-200 rounded w-full" />
        </div>
        <div className="relative w-full pb-12 sm:pb-14 md:pb-16 lg:pb-18 xl:pb-20 animate-pulse">
          <div className="relative w-full bg-gray-200 rounded-xl sm:rounded-2xl min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[460px] xl:min-h-[520px]" />
        </div>
      </div>
    </section>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function AboutUs() {
  const [data, setData] = useState<AboutUsSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── Fetch API data ────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await listAboutSectionApi({});
        console.log(data, "herodata");
        setData(data?.[0] ?? null);
      } catch (error) {
        console.error("HeroSection API error:", error);
        setError("Failed to load about section data");
      } finally {
        setLoading(false);
      }
    };
    fetchHeroData();
  }, []);

  if (loading) return <SkeletonLoader />;

  if (error) {
    return (
      <section className="w-full overflow-x-hidden py-16 sm:py-20">
        <div className="text-center text-red-500 px-4">
          <p className="text-base sm:text-lg font-semibold">⚠ Error loading content</p>
          <p className="text-xs sm:text-sm mt-2">{error}</p>
        </div>
      </section>
    );
  }

  if (!data) return null;

  // Join descriptions into a single paragraph with proper spacing
  const fullDescription = data.descriptions.join(" ");

  return (
    <section className="w-full overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] items-start gap-10 sm:gap-12 md:gap-14 xl:gap-14 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-60 py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 mx-auto">
        
        {/* ── Left column ───────────────────────── */}
        <div className="w-full pt-1 sm:pt-2 md:pt-3 xl:pt-4">
          
          {/* Eyebrow */}
          <p className="flex items-center gap-1.5 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-semibold tracking-[0.12em] sm:tracking-[0.13em] xl:tracking-[0.14em] uppercase text-[#F26A23] mb-2 sm:mb-2.5 md:mb-3 xl:mb-4">
            <span
              aria-hidden="true"
              className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-normal leading-none"
            >
              ⓘ
            </span>
            {data.badgeText}
          </p>

          {/* Heading */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[46px] leading-[130%] tracking-[0.06em] sm:tracking-[0.07em] md:tracking-[0.08em] lg:tracking-[0.09em] xl:tracking-[0.10em] text-[#0f0f0f] mb-3 sm:mb-3.5 md:mb-4 xl:mb-5">
            {data.heading}
            <br />
            <span className="text-[#e07b2a]">{data.headingHighlight}</span>{" "}
            {data.headingEnd}
          </h2>

          {/* Description */}
          <p className="text-[14px] sm:text-[14.5px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-[1.75] sm:leading-[1.8] md:leading-[1.85] xl:leading-[1.9] text-[#979797] max-w-[680px]">
            {fullDescription}
          </p>
        </div>

        {/* ── Right column ─────────────────────── */}
        <div className="relative w-full pb-12 sm:pb-14 md:pb-16 lg:pb-18 xl:pb-20 overflow-visible">
          
          {/* Top Dot Pattern */}
          <Image
            src={data.patternImage}
            alt=""
            width={180}
            height={180}
            aria-hidden="true"
            className="absolute -top-6 sm:-top-7 md:-top-8 lg:-top-10 xl:-top-13 right-0 sm:right-0 md:-right-4 lg:-right-8 xl:-right-16 opacity-100 pointer-events-none z-0 w-[90px] sm:w-[110px] md:w-[130px] lg:w-[160px] xl:w-[180px] h-auto"
          />

          {/* Hero Image */}
          <div className="relative w-full rounded-xl sm:rounded-[18px] xl:rounded-2xl overflow-hidden z-10 min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[460px] xl:min-h-[520px]">
            <Image
              src={data.image}
              alt="Canopy Security Services"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </div>

          {/* Stats Card */}
          <div
            className="
              absolute z-20
              bg-[#D9D9D933]
              rounded-[16px] sm:rounded-[18px] xl:rounded-[20px]
              grid grid-cols-3
              divide-x divide-[#e8e8e8]

              w-[94%] sm:w-[92%] md:w-[90%] lg:w-[88%] xl:w-[530px]
              h-[85px] sm:h-[95px] md:h-[100px] lg:h-[108px] xl:h-[115px]

              px-3 sm:px-4 md:px-6 lg:px-8 xl:px-[38px]
              py-3 sm:py-4 md:py-5 lg:py-[24px] xl:py-[26px]

              gap-[8px] sm:gap-[9px] xl:gap-[10px]

              left-1/2 sm:left-1/2 md:left-1/2 lg:left-[10%] xl:left-[2%]
              -translate-x-1/2 sm:-translate-x-1/2 md:-translate-x-1/2 lg:translate-x-[-50%] xl:translate-x-[-50%]
            "
            style={{
              bottom: "38px",
              backdropFilter: "blur(10px)",
            }}
          >
            {data.stats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className="grid place-items-center px-1 sm:px-2 md:px-4 lg:px-6 xl:px-10"
              >
                <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[1.75rem] font-semibold text-[#6B0F1A] leading-tight">
                  {stat.value}
                </p>

                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] text-[#979797] font-medium tracking-wide mt-0.5 sm:mt-1 text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Dot Pattern */}
          <Image
            src={data.patternImage}
            alt=""
            width={180}
            height={180}
            aria-hidden="true"
            className="
              absolute
              bottom-0
              -left-8 sm:-left-10 md:-left-16 lg:-left-32 xl:-left-56 2xl:-left-75
              opacity-100
              pointer-events-none
              z-10
              w-[90px] sm:w-[110px] md:w-[130px] lg:w-[160px] xl:w-[180px]
              h-auto
            "
          />
        </div>
      </div>
    </section>
  );
}