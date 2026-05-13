"use client";

import Image from "next/image";
import Subtract from "../../../public/images/about/Subtract.png";
import DotPattern from "../../../public/images/about/Pattern1.jpg";

// ─── Content object ──────────────────────────────────────────────────────────
const aboutContent = {
  eyebrow: "About Us",
  headingPrefix: "Welcome To",
  headingBrand: "Canopy",
  headingSuffix: "Security Services L.L.C",
  description:
    "Canopy Security Services – a highly experienced security service provider established with the aim of providing the best and most effective security services in the market. Since its inception the one factor that Canopy Security Services has never compromised on is its efficiency. with an unparalleled eye for perfection, Canopy Security Services is what acts as your path to a safe and secure future.",
  image: {
    src: Subtract,
    alt: "Security officer monitoring CCTV screens",
  },
  stats: [
    { value: "3500", label: "Guards" },
    { value: "48", label: "Awards" },
    { value: "25", label: "Branches" },
  ],
};
// ────────────────────────────────────────────────────────────────────────────

export default function AboutUs() {
  const {
    eyebrow,
    headingPrefix,
    headingBrand,
    headingSuffix,
    description,
    image,
    stats,
  } = aboutContent;

  return (
    <section className="w-full overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] items-start gap-14 px-5 sm:px-8 md:px-14 lg:px-24 xl:px-40 2xl:px-60 py-14 md:py-20 mx-auto">
        
        {/* ── Left column ───────────────────────── */}
        <div className="w-full pt-2 md:pt-4">
          {/* Eyebrow */}
          <p className="flex items-center gap-1.5 text-[15px] sm:text-[16px] md:text-[18px] font-semibold tracking-[0.14em] uppercase text-[#F26A23] mb-3 md:mb-4">
            <span
              aria-hidden="true"
              className="text-[16px] md:text-[18px] font-normal leading-none"
            >
              ⓘ
            </span>
            {eyebrow}
          </p>

          {/* Heading */}
          <h2 className="font-bold text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px] leading-[130%] tracking-[0.08em] md:tracking-[0.10em] text-[#0f0f0f] mb-4 md:mb-5">
            {headingPrefix}
            <br />
            <span className="text-[#e07b2a]">{headingBrand}</span>{" "}
            {headingSuffix}
          </h2>

          {/* Description */}
          <p className="text-[15px] md:text-[16px] leading-[1.9] text-[#979797] max-w-[680px]">
            {description}
          </p>
        </div>

        {/* ── Right column ─────────────────────── */}
        <div className="relative w-full pb-16 md:pb-20 overflow-visible">
          
          {/* Top Dot Pattern */}
          <Image
            src={DotPattern}
            alt=""
            width={180}
            height={180}
            aria-hidden="true"
            className="absolute -top-8 md:-top-10 lg:-top-13 right-0 md:-right-8 lg:-right-16 opacity-100 pointer-events-none z-0 w-[110px] sm:w-[140px] md:w-[180px] h-auto"
          />

          {/* Hero Image */}
          <div className="relative w-full rounded-2xl overflow-hidden z-10 min-h-[320px] sm:min-h-[420px] md:min-h-[520px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </div>

          {/* Stats Card */}
         {/* Stats card */}
<div
  className="
    absolute z-20
    bg-[#D9D9D933]
    rounded-[20px]
    grid grid-cols-3
    divide-x divide-[#e8e8e8]

    w-[92%]
    sm:w-[530px]

    h-[95px]
    sm:h-[115px]

    px-4 sm:px-[38px]
    py-4 sm:py-[26px]

    gap-[10px]

    left-1/2
    sm:left-[2%]

    -translate-x-1/2
    sm:translate-x-[-50%]
  "
  style={{
    bottom: "42px",
    backdropFilter: "blur(10px)",
  }}
>
  {stats.map((stat) => (
    <div
      key={stat.label}
      className="grid place-items-center px-2 sm:px-10"
    >
      <p className="text-[22px] sm:text-[1.75rem] font-semibold text-[#6B0F1A] leading-tight">
        {stat.value}
      </p>

      <p className="text-[16px] sm:text-[16px] text-[#979797] font-medium tracking-wide mt-1 text-center">
        {stat.label}
      </p>
    </div>
  ))}
</div>

          {/* Bottom Dot Pattern */}
          <Image
            src={DotPattern}
            alt=""
            width={180}
            height={180}
            aria-hidden="true"
            className="
              absolute
              bottom-0
              -left-10
              sm:-left-16
              md:-left-24
              lg:-left-40
              xl:-left-56
              2xl:-left-75
              opacity-100
              pointer-events-none
              z-10
              w-[110px]
              sm:w-[140px]
              md:w-[180px]
              h-auto
            "
          />
        </div>
      </div>
    </section>
  );
}