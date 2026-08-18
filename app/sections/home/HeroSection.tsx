"use client";

import {
  ListHomeHeroSection,
  HeroSlide,
  HeroButton,
} from "@/Interfaces/HomeHero";
import { listHomeHeroApi } from "@/app/api/web/Home";
import Button from "@/app/components/ui/Button";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroSectionProps {
  badgeText?: string;
  badgeIcon?: StaticImageData | string;
  heading?: string;
  headingHighlight?: string;
  subtext?: string;
  buttons?: HeroButton[];
  slides?: (
    | HeroSlide
    | {
        image: StaticImageData | string;
        title: string;
        description: string;
        isActive?: boolean;
      }
  )[];
  slideInterval?: number;
  patternImage?: StaticImageData | string;
  accentColor?: string;
  bgColor?: string;
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function HeroSkeleton() {
  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-20">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-60">
        <div className="max-w-[1920px] mx-auto py-4 sm:py-8 md:py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 sm:gap-8 lg:gap-5 items-center">
            {/* Left: copy skeleton */}

            <div className="relative z-10 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200 animate-pulse" />

                <div className="h-4 w-36 rounded bg-gray-200 animate-pulse" />
              </div>

              <div className="space-y-2 mt-3 sm:mt-4">
                <div className="h-7 sm:h-9 md:h-10 lg:h-12 w-3/4 rounded-lg bg-gray-200 animate-pulse" />

                <div className="h-7 sm:h-9 md:h-10 lg:h-12 w-1/2 rounded-lg bg-gray-200 animate-pulse" />
              </div>

              <div className="space-y-2 mt-3 sm:mt-4">
                <div className="h-3 sm:h-4 w-full max-w-[520px] rounded bg-gray-200 animate-pulse" />

                <div className="h-3 sm:h-4 w-5/6 max-w-[440px] rounded bg-gray-200 animate-pulse" />

                <div className="h-3 sm:h-4 w-2/3 max-w-[360px] rounded bg-gray-200 animate-pulse" />
              </div>

              <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap gap-3 sm:gap-4">
                <div className="h-10 sm:h-11 w-28 sm:w-32 rounded-full bg-gray-200 animate-pulse" />

                <div className="h-10 sm:h-11 w-28 sm:w-32 rounded-full bg-gray-200 animate-pulse" />
              </div>
            </div>

            {/* Right: image slider skeleton */}

            <div className="relative w-full">
              <div className="relative w-full h-[200px] sm:h-[260px] md:h-[340px] lg:h-[440px] xl:h-[500px] overflow-hidden rounded-2xl sm:rounded-[28px] lg:rounded-[36px] bg-gray-200 animate-pulse">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-4 sm:left-6 md:left-8 lg:left-10 z-10 space-y-2 pr-4">
                  <div className="h-5 sm:h-6 md:h-8 w-40 sm:w-52 md:w-64 rounded-lg bg-gray-300/60 animate-pulse" />

                  <div className="h-3 sm:h-4 w-56 sm:w-68 md:w-80 rounded bg-gray-300/60 animate-pulse" />

                  <div className="h-3 sm:h-4 w-44 sm:w-56 md:w-72 rounded bg-gray-300/60 animate-pulse" />
                </div>

                <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 right-4 sm:right-5 md:right-6 flex gap-1.5 sm:gap-2 z-10">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-2 sm:h-2.5 rounded-full bg-gray-300/60 animate-pulse ${
                        i === 0 ? "w-7 sm:w-9 md:w-10" : "w-2 sm:w-2.5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar skeleton */}

      <div className="relative mt-10 w-full sm:mt-12 md:mt-14 lg:mt-10 xl:mt-12">
        <div className="min-h-[80px] w-full rounded-r-[10px] bg-gray-200 animate-pulse sm:min-h-[86px] md:min-h-[94px] lg:h-[96px] lg:min-h-0 xl:h-[100px]" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_BUTTONS: HeroButton[] = [
  {
    label: "Explore",
    href: "/services",
    variant: "primary",
  },
  {
    label: "Contact",
    href: "/contact",
    variant: "outline",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection({
  badgeText: propBadgeText = "Trusted Security Partner",
  badgeIcon: propBadgeIcon,
  heading: propHeading = "Highly Trained &\nExperienced",
  headingHighlight: propHeadingHighlight = "Security Services",
  subtext:
    propSubtext = "Providing professional security solutions to protect people, property, and businesses with trained and reliable security personnel.",
  buttons: propButtons = DEFAULT_BUTTONS,
  slides: propSlides = [],
  slideInterval: propSlideInterval = 3000,
  patternImage: propPatternImage,
  accentColor: propAccentColor = "#F26A23",
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState<ListHomeHeroSection | null>(null);

  // ── Fetch API data ────────────────────────────────────────────────────────

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await listHomeHeroApi({});

        console.log(data, "herodata");

        setApiData(data?.[0] ?? null);
      } catch (error) {
        console.error("HeroSection API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // ── Merge API data with prop fallbacks ────────────────────────────────────

  const badgeText = apiData?.badgeText ?? propBadgeText;
  const badgeIcon = apiData?.badgeIcon ?? propBadgeIcon;
  const heading = apiData?.heading ?? propHeading;
  const headingHighlight = apiData?.headingHighlight ?? propHeadingHighlight;
  const subtext = apiData?.subtext ?? propSubtext;
  const buttons = apiData?.buttons ?? propButtons;

  const slides = (apiData?.slides ?? propSlides).filter(
    (s) => s.isActive !== false,
  );

  const slideInterval = apiData?.slideInterval ?? propSlideInterval;

  const patternImage = apiData?.patternImage ?? propPatternImage;

  const accentColor = apiData?.accentColor ?? propAccentColor;

  // ── Slide auto-advance ────────────────────────────────────────────────────

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(id);
  }, [slides.length, slideInterval]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  if (loading) {
    return <HeroSkeleton />;
  }

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-20">
      {/* ============================================================
          DECORATIVE PATTERN
          ============================================================ */}

      {patternImage && (
        <Image
          src={typeof patternImage === "string" ? patternImage : patternImage}
          alt=""
          aria-hidden
          width={420}
          height={420}
          className="
            absolute
            top-0
            left-0
            w-[120px]
            sm:w-[180px]
            md:w-[240px]
            lg:w-[320px]
            xl:w-[420px]
            opacity-90
            pointer-events-none
            select-none
          "
        />
      )}

      {/* ============================================================
          PADDED CONTENT AREA
          ============================================================ */}

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-60">
        <div className="max-w-[1920px] mx-auto py-4 sm:py-8 md:py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 sm:gap-8 lg:gap-5 items-center">
            {/* ======================================================
                LEFT: HERO COPY
                ====================================================== */}

            <div className="relative z-10">
              {/* Badge */}

              {badgeText && (
                <div className="flex items-center gap-2">
                  {badgeIcon && (
                    <Image
                      src={badgeIcon}
                      alt=""
                      aria-hidden
                      width={20}
                      height={20}
                      className="
                        w-4
                        h-4
                        sm:w-5
                        sm:h-5
                        flex-shrink-0
                      "
                    />
                  )}

                  <p
                    className="
                      uppercase
                      tracking-wide
                      text-[11px]
                      sm:text-sm
                      md:text-base
                      lg:text-[18px]
                      font-semibold
                    "
                    style={{
                      color: accentColor,
                    }}
                  >
                    {badgeText}
                  </p>
                </div>
              )}

              {/* Heading */}

              <h1
                className="
                  mt-3
                  sm:mt-4
                  text-[24px]
                  sm:text-[30px]
                  md:text-[36px]
                  lg:text-[42px]
                  xl:text-[46px]
                  font-semibold
                  text-black
                  leading-tight
                  whitespace-pre-line
                "
              >
                {heading}{" "}
                {headingHighlight && (
                  <span
                    style={{
                      color: accentColor,
                    }}
                  >
                    {headingHighlight}
                  </span>
                )}
              </h1>

              {/* Subtext */}

              {subtext && (
                <p
                  className="
                    mt-3
                    sm:mt-4
                    max-w-full
                    sm:max-w-[480px]
                    md:max-w-[560px]
                    lg:max-w-[620px]
                    text-[#979797]
                    text-[13px]
                    sm:text-[14px]
                    md:text-[15px]
                    lg:text-[16px]
                    leading-6
                    sm:leading-7
                    md:leading-8
                    font-normal
                  "
                >
                  {subtext}
                </p>
              )}

              {/* Buttons */}

              {buttons.length > 0 && (
                <div
                  className="
                    mt-5
                    sm:mt-6
                    md:mt-7
                    flex
                    flex-wrap
                    gap-3
                    sm:gap-4
                    md:gap-5
                  "
                >
                  {buttons.map((btn) => (
                    <Button
                      key={btn.href}
                      label={btn.label}
                      href={btn.href}
                      variant={btn.variant as "primary" | "outline" | "ghost"}
                      color={accentColor}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ======================================================
                RIGHT: IMAGE SLIDER
                ====================================================== */}

            {slides.length > 0 && (
              <div
                className="
                  relative
                  w-full
                  mt-2
                  sm:mt-4
                  lg:mt-0
                "
              >
                <div
                  className="
                    relative
                    w-full
                    h-[200px]
                    sm:h-[260px]
                    md:h-[340px]
                    lg:h-[440px]
                    xl:h-[500px]
                    overflow-hidden
                    rounded-2xl
                    sm:rounded-[28px]
                    lg:rounded-[36px]
                  "
                >
                  {/* Slides */}

                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={
                        typeof slide.image === "string"
                          ? slide.image
                          : (slide.image as StaticImageData).src
                      }
                      alt={slide.title}
                      className={`
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        transition-opacity
                        duration-1000
                        ${currentSlide === index ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  ))}

                  {/* Gradient overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Slide copy */}

                  {activeSlide && (
                    <div
                      className="
                        absolute
                        bottom-4
                        sm:bottom-6
                        md:bottom-8
                        lg:bottom-10
                        left-4
                        sm:left-6
                        md:left-8
                        lg:left-10
                        text-white
                        z-10
                        pr-4
                        sm:pr-6
                      "
                    >
                      <h3
                        className="
                          text-base
                          sm:text-lg
                          md:text-2xl
                          lg:text-3xl
                          xl:text-4xl
                          font-semibold
                          leading-tight
                          line-clamp-2
                        "
                      >
                        {activeSlide.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          sm:mt-2
                          md:mt-3
                          max-w-[280px]
                          sm:max-w-[420px]
                          md:max-w-[520px]
                          lg:max-w-[600px]
                          text-xs
                          sm:text-sm
                          md:text-base
                          lg:text-lg
                          text-white/90
                          leading-5
                          sm:leading-6
                          md:leading-7
                          line-clamp-2
                          sm:line-clamp-3
                        "
                      >
                        {activeSlide.description}
                      </p>
                    </div>
                  )}

                  {/* Dot indicators */}

                  <div
                    className="
                      absolute
                      bottom-3
                      sm:bottom-5
                      md:bottom-6
                      right-3
                      sm:right-5
                      md:right-6
                      flex
                      gap-1.5
                      sm:gap-2
                      z-10
                    "
                  >
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`
                          h-1.5
                          sm:h-2
                          md:h-3
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            currentSlide === index
                              ? "w-6 sm:w-8 md:w-10 bg-white"
                              : "w-1.5 sm:w-2 md:w-3 bg-white/50"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================
          TRUST BAR + ANNIVERSARY
          ============================================================ */}

      <div
        className="
          relative
          mt-10
          w-full

          sm:mt-12

          md:mt-14

          lg:mt-10

          xl:mt-12
        "
      >
        {/* ============================================================
            TRUST BAR

            Desktop:
            One continuous red bar.

            Mobile:
            2 x 2 readable layout.

            Anniversary image gets dedicated left-side space.
            ============================================================ */}

        <div
          className="
            relative
            z-10
            w-full
            overflow-hidden
            rounded-r-[12px]
            bg-[#7F220E]

            /* MOBILE */

            min-h-[118px]
            pl-[78px]
            pr-2
            py-2

            /* SMALL */

            sm:min-h-[105px]
            sm:pl-[100px]
            sm:pr-3
            sm:py-3

            /* TABLET */

            md:min-h-[90px]
            md:pl-[125px]
            md:pr-4
            md:py-0

            /* DESKTOP */

            lg:h-[90px]
            lg:min-h-0
            lg:pl-[190px]
            lg:pr-5

            /* LARGE DESKTOP */

            xl:h-[95px]
            xl:pl-[215px]
            xl:pr-6

            /* 2XL */

            2xl:h-[100px]
            2xl:pl-[235px]
            2xl:pr-7
          "
        >
          {/* ============================================================
              TRUST ITEMS
              ============================================================ */}

          <div
            className="
              grid
              h-full
              w-full

              grid-cols-2
              gap-1

              sm:grid-cols-2
              sm:gap-1.5

              md:grid-cols-4
              md:gap-0
            "
          >
            {/* ==========================================================
                LICENSED & CERTIFIED
                ========================================================== */}

            <div
              className="
                flex
                min-w-0
                items-center

                rounded-[5px]
                border
                border-white/15
                bg-white/[0.025]

                px-2
                py-2

                sm:px-2.5
                sm:py-2.5

                md:rounded-none
                md:border-0
                md:border-r
                md:border-white/25
                md:px-3
                md:py-0

                lg:px-4

                xl:px-5

                2xl:px-6
              "
            >
              {/* Icon */}

              <div
                className="
                  mr-2
                  flex
                  shrink-0
                  items-center
                  justify-center
                  text-[#F26A23]

                  sm:mr-2.5

                  md:mr-2.5

                  lg:mr-3

                  xl:mr-3.5
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-[20px]
                    w-[20px]

                    sm:h-[22px]
                    sm:w-[22px]

                    md:h-[23px]
                    md:w-[23px]

                    lg:h-[25px]
                    lg:w-[25px]

                    xl:h-[27px]
                    xl:w-[27px]
                  "
                >
                  <path
                    d="M12 3L20 6V11C20 16.2 16.5 20 12 21C7.5 20 4 16.2 4 11V6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8.5 12L10.8 14.3L15.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    truncate
                    whitespace-nowrap
                    font-semibold
                    leading-[1.15]
                    text-white

                    text-[10px]

                    sm:text-[11px]

                    md:text-[12px]

                    lg:text-[13px]

                    xl:text-[14px]

                    2xl:text-[15px]
                  "
                >
                  Licensed & Certified
                </h3>

                <p
                  className="
                    mt-[4px]
                    truncate
                    whitespace-nowrap
                    font-normal
                    leading-none
                    text-white/70

                    text-[6px]

                    sm:text-[7px]

                    md:text-[7px]

                    lg:text-[8px]

                    xl:text-[9px]

                    2xl:text-[10px]
                  "
                >
                  SIRA Approved Security Company
                </p>
              </div>
            </div>

            {/* ==========================================================
                TRAINED PROFESSIONALS
                ========================================================== */}

            <div
              className="
                flex
                min-w-0
                items-center

                rounded-[5px]
                border
                border-white/15
                bg-white/[0.025]

                px-2
                py-2

                sm:px-2.5
                sm:py-2.5

                md:rounded-none
                md:border-0
                md:border-r
                md:border-white/25
                md:px-3
                md:py-0

                lg:px-4

                xl:px-5

                2xl:px-6
              "
            >
              {/* Icon */}

              <div
                className="
                  mr-2
                  flex
                  shrink-0
                  items-center
                  justify-center
                  text-[#F26A23]

                  sm:mr-2.5

                  md:mr-2.5

                  lg:mr-3

                  xl:mr-3.5
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-[20px]
                    w-[20px]

                    sm:h-[22px]
                    sm:w-[22px]

                    md:h-[23px]
                    md:w-[23px]

                    lg:h-[25px]
                    lg:w-[25px]

                    xl:h-[27px]
                    xl:w-[27px]
                  "
                >
                  <circle
                    cx="9"
                    cy="8"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="17"
                    cy="9"
                    r="2.3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M3.5 19C3.5 15.7 5.8 13.5 9 13.5C12.2 13.5 14.5 15.7 14.5 19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M14.5 14.2C15.2 13.8 16 13.6 17 13.6C19.6 13.6 21 15.3 21 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Text */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    truncate
                    whitespace-nowrap
                    font-semibold
                    leading-[1.15]
                    text-white

                    text-[10px]

                    sm:text-[11px]

                    md:text-[12px]

                    lg:text-[13px]

                    xl:text-[14px]

                    2xl:text-[15px]
                  "
                >
                  Trained Professionals
                </h3>

                <p
                  className="
                    mt-[4px]
                    truncate
                    whitespace-nowrap
                    font-normal
                    leading-none
                    text-white/70

                    text-[6px]

                    sm:text-[7px]

                    md:text-[7px]

                    lg:text-[8px]

                    xl:text-[9px]

                    2xl:text-[10px]
                  "
                >
                  Well Trained & Experienced Staff
                </p>
              </div>
            </div>

            {/* ==========================================================
                24/7 PROTECTION
                ========================================================== */}

            <div
              className="
                flex
                min-w-0
                items-center

                rounded-[5px]
                border
                border-white/15
                bg-white/[0.025]

                px-2
                py-2

                sm:px-2.5
                sm:py-2.5

                md:rounded-none
                md:border-0
                md:border-r
                md:border-white/25
                md:px-3
                md:py-0

                lg:px-4

                xl:px-5

                2xl:px-6
              "
            >
              {/* Icon */}

              <div
                className="
                  mr-2
                  flex
                  shrink-0
                  items-center
                  justify-center
                  text-[#F26A23]

                  sm:mr-2.5

                  md:mr-2.5

                  lg:mr-3

                  xl:mr-3.5
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-[20px]
                    w-[20px]

                    sm:h-[22px]
                    sm:w-[22px]

                    md:h-[23px]
                    md:w-[23px]

                    lg:h-[25px]
                    lg:w-[25px]

                    xl:h-[27px]
                    xl:w-[27px]
                  "
                >
                  <path
                    d="M12 3V7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M12 17V21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M3 12H7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M17 12H21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>

              {/* Text */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    truncate
                    whitespace-nowrap
                    font-semibold
                    leading-[1.15]
                    text-white

                    text-[10px]

                    sm:text-[11px]

                    md:text-[12px]

                    lg:text-[13px]

                    xl:text-[14px]

                    2xl:text-[15px]
                  "
                >
                  24/7 Protection
                </h3>

                <p
                  className="
                    mt-[4px]
                    truncate
                    whitespace-nowrap
                    font-normal
                    leading-none
                    text-white/70

                    text-[6px]

                    sm:text-[7px]

                    md:text-[7px]

                    lg:text-[8px]

                    xl:text-[9px]

                    2xl:text-[10px]
                  "
                >
                  Round The Clock Security Service
                </p>
              </div>
            </div>

            {/* ==========================================================
                TRUSTED BY CLIENTS
                ========================================================== */}

            <div
              className="
                flex
                min-w-0
                items-center

                rounded-[5px]
                border
                border-white/15
                bg-white/[0.025]

                px-2
                py-2

                sm:px-2.5
                sm:py-2.5

                md:rounded-none
                md:border-0
                md:px-3
                md:py-0

                lg:px-4

                xl:px-5

                2xl:px-6
              "
            >
              {/* Icon */}

              <div
                className="
                  mr-2
                  flex
                  shrink-0
                  items-center
                  justify-center
                  text-[#F26A23]

                  sm:mr-2.5

                  md:mr-2.5

                  lg:mr-3

                  xl:mr-3.5
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-[20px]
                    w-[20px]

                    sm:h-[22px]
                    sm:w-[22px]

                    md:h-[23px]
                    md:w-[23px]

                    lg:h-[25px]
                    lg:w-[25px]

                    xl:h-[27px]
                    xl:w-[27px]
                  "
                >
                  <path
                    d="M12 3L14.8 8.2L20.5 9L16.3 13.1L17.3 18.8L12 16.1L6.7 18.8L7.7 13.1L3.5 9L9.2 8.2L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M9 12L11 14L15.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    truncate
                    whitespace-nowrap
                    font-semibold
                    leading-[1.15]
                    text-white

                    text-[10px]

                    sm:text-[11px]

                    md:text-[12px]

                    lg:text-[13px]

                    xl:text-[14px]

                    2xl:text-[15px]
                  "
                >
                  Trusted By Clients
                </h3>

                <p
                  className="
                    mt-[4px]
                    truncate
                    whitespace-nowrap
                    font-normal
                    leading-none
                    text-white/70

                    text-[6px]

                    sm:text-[7px]

                    md:text-[7px]

                    lg:text-[8px]

                    xl:text-[9px]

                    2xl:text-[10px]
                  "
                >
                  Delivering Excellence Since 2016
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            ANNIVERSARY IMAGE
            ============================================================ */}
        {/* ============================================================
    ANNIVERSARY IMAGE
    ============================================================ */}

        <div
          className="
    pointer-events-none
    absolute
    left-0
    bottom-0
    z-30
    select-none
  "
        >
          <picture>
            {/* MOBILE */}

            <source
              media="(max-width: 639px)"
              srcSet="/images/home/anniversary-mobile.png"
            />

            {/* TABLET */}

            <source
              media="(max-width: 1023px)"
              srcSet="/images/home/anniversary-tablet.png"
            />

            {/* DESKTOP */}

            <img
              src="/images/home/anniversary.png"
              alt=""
              aria-hidden="true"
              className="
        block
        h-auto
        max-w-none

        w-[82px]

        sm:w-[105px]

        md:w-[130px]

        lg:w-[175px]

        xl:w-[205px]

        2xl:w-[235px]
      "
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
