"use client";

import Image from "next/image";

// ─── Content object (single source of truth) ────────────────────────────────
const aboutContent = {
  eyebrow: "About Us",
  headingPrefix: "Welcome To",
  headingBrand: "Canopy",
  headingSuffix: "Security Services L.L.C",
  description:
    "Canopy Security Services – a highly experienced security service provider established with the aim of providing the best and most effective security services in the market. Since its inception the one factor that Canopy Security Services has never compromised on is its efficiency. with an unparalleled eye for perfection, Canopy Security Services is what acts as your path to a safe and secure future.",
  image: {
    src: "/security-monitor.jpg", // replace with your actual image path
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
    <section className="flex flex-col md:flex-row items-start gap-16 px-8 md:px-24 py-20 bg-white max-w-7xl mx-auto">
      {/* ── Left column ── */}
      <div className="flex-1 basis-5/12 max-w-lg w-full">
        {/* Eyebrow */}
        <p className="flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#e07b2a] mb-4">
          <span aria-hidden="true" className="text-sm leading-none">
            ⓘ
          </span>
          {eyebrow}
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-extrabold leading-tight tracking-tight text-[#0f0f0f] mb-2">
          {headingPrefix}
          <br />
          <span className="text-[#e07b2a]">{headingBrand}</span> {headingSuffix}
        </h2>

        {/* Description */}
        <p className="text-xs leading-relaxed text-[#555555]">{description}</p>
      </div>

      {/* ── Right column ── */}
      <div className="flex-1 basis-7/12 relative w-full pb-8">
        {/* Dot grid — top right */}
        <span
          aria-hidden="true"
          className="absolute -top-6 -right-6 w-[90px] h-[90px] opacity-50 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9c9c9 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Hero image */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-10">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 668px) 90vw, 40vw"
            priority
          />
        </div>

        {/* Stats card — overlaps image bottom edge */}
        <div className="absolute bottom-8 left-2/18 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] flex items-center px-10 py-5 whitespace-nowrap">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center px-8"
            >
              {/* Divider between items */}
              {i !== 0 && (
                <span className="absolute left-0 top-[10%] h-[80%] w-px bg-[#e0e0e0]" />
              )}
              <p className="text-[1.7rem] font-extrabold text-[#e07b2a] leading-tight m-0">
                {stat.value}
              </p>
              <p className="text-xs text-[#888888] font-medium tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Dot grid — bottom left */}
        <span
          aria-hidden="true"
          className="absolute -bottom-14 -left-6 w-[90px] h-[90px] opacity-50 pointer-events-none z-0 hidden md:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9c9c9 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />
      </div>
    </section>
  );
}
