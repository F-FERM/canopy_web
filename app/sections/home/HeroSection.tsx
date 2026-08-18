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
    <section className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-16 lg:py-20 xl:px-60">
      <div className="mx-auto max-w-[1920px] py-4 sm:py-8 md:py-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[2fr_3fr] lg:gap-5">
          {/* Left: copy skeleton */}
          <div className="relative z-30 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200 sm:h-5 sm:w-5" />

              <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mt-3 space-y-2 sm:mt-4">
              <div className="h-7 w-3/4 animate-pulse rounded-lg bg-gray-200 sm:h-9 md:h-10 lg:h-12" />

              <div className="h-7 w-1/2 animate-pulse rounded-lg bg-gray-200 sm:h-9 md:h-10 lg:h-12" />
            </div>

            <div className="mt-3 space-y-2 sm:mt-4">
              <div className="h-3 w-full max-w-[520px] animate-pulse rounded bg-gray-200 sm:h-4" />

              <div className="h-3 w-5/6 max-w-[440px] animate-pulse rounded bg-gray-200 sm:h-4" />

              <div className="h-3 w-2/3 max-w-[360px] animate-pulse rounded bg-gray-200 sm:h-4" />
            </div>

            <div className="mt-5 flex flex-wrap gap-3 sm:mt-6 sm:gap-4 md:mt-7">
              <div className="h-10 w-28 animate-pulse rounded-full bg-gray-200 sm:h-11 sm:w-32" />

              <div className="h-10 w-28 animate-pulse rounded-full bg-gray-200 sm:h-11 sm:w-32" />
            </div>
          </div>

          {/* Right: image slider skeleton */}
          <div className="relative w-full">
            <div className="relative h-[190px] w-full animate-pulse overflow-hidden rounded-[18px] bg-gray-200 sm:h-[230px] sm:rounded-[24px] md:h-[300px] lg:h-[400px] lg:rounded-[30px] xl:h-[440px] 2xl:h-[480px]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="absolute bottom-4 left-4 z-10 space-y-2 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
                <div className="h-5 w-40 animate-pulse rounded-lg bg-gray-300/60 sm:h-6 sm:w-52 md:h-8 md:w-64" />

                <div className="h-3 w-56 animate-pulse rounded bg-gray-300/60 sm:h-4 sm:w-68 md:w-80" />

                <div className="h-3 w-44 animate-pulse rounded bg-gray-300/60 sm:h-4 sm:w-56 md:w-72" />
              </div>

              <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 sm:bottom-5 sm:right-5 sm:gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-2 animate-pulse rounded-full bg-gray-300/60 sm:h-2.5 ${
                      i === 0 ? "w-7 sm:w-9 md:w-10" : "w-2 sm:w-2.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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

  // ── Slide auto advance ───────────────────────────────────────────────────

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(id);
  }, [slides.length, slideInterval]);

  // ── Reset slide ──────────────────────────────────────────────────────────

  useEffect(() => {
    setCurrentSlide(0);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  // ── Loading ──────────────────────────────────────────────────────────────

  if (loading) {
    return <HeroSkeleton />;
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ================================================================
          ANNIVERSARY DECORATION
          ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-0
          select-none
        "
      >
        <picture>
          {/* ============================================================
              MOBILE
              700 × 487
              <= 639px
              ============================================================ */}

          <source
            media="(max-width: 639px)"
            srcSet="/images/home/anniversary-mobile.png"
          />

          {/* ============================================================
              TABLET
              1200 × 835
              640px - 1023px
              ============================================================ */}

          <source
            media="(max-width: 1023px)"
            srcSet="/images/home/anniversary-tablet.png"
          />

          {/* ============================================================
              DESKTOP
              2048 × 1426
              >= 1024px
              ============================================================ */}

          <img
            src="/images/home/anniversary.png"
            alt=""
            aria-hidden="true"
            className="
              h-auto
              w-[235px]

              sm:w-[285px]

              md:w-[350px]

              lg:w-[470px]

              xl:w-[520px]

              2xl:w-[570px]
            "
          />
        </picture>
      </div>

      {/* ================================================================
          DECORATIVE PATTERN
          ================================================================ */}

      {patternImage && (
        <Image
          src={typeof patternImage === "string" ? patternImage : patternImage}
          alt=""
          aria-hidden="true"
          width={420}
          height={420}
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            z-0
            hidden
            w-[120px]
            select-none
            opacity-90

            sm:block
            sm:w-[180px]

            md:w-[240px]

            lg:w-[320px]

            xl:w-[420px]
          "
        />
      )}

      {/* ================================================================
          MAIN HERO CONTENT
          ================================================================ */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1920px]

          px-4
          pb-10
          pt-[245px]

          sm:px-6
          sm:pb-12
          sm:pt-[270px]

          md:px-10
          md:pb-16
          md:pt-[300px]

          lg:px-16
          lg:pb-20
          lg:pt-40

          xl:px-60
          xl:pb-24
          xl:pt-44
        "
      >
        {/* ================================================================
            HERO GRID
            ================================================================ */}

        <div
          className="
            grid
            grid-cols-1
            items-center

            gap-8

            sm:gap-10

            md:gap-12

            lg:grid-cols-[2fr_3fr]
            lg:gap-6

            xl:gap-8
          "
        >
          {/* ============================================================
              LEFT CONTENT
              ============================================================ */}

          <div
            className="
              relative
              z-30
              min-w-0
            "
          >
            {/* ----------------------------------------------------------
                BADGE
                ---------------------------------------------------------- */}

            {badgeText && (
              <div className="flex items-center gap-2">
                {badgeIcon && (
                  <Image
                    src={badgeIcon}
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="
                      h-4
                      w-4
                      shrink-0

                      sm:h-5
                      sm:w-5
                    "
                  />
                )}

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wide

                    sm:text-xs

                    md:text-sm

                    lg:text-base
                  "
                  style={{
                    color: accentColor,
                  }}
                >
                  {badgeText}
                </p>
              </div>
            )}

            {/* ----------------------------------------------------------
                HEADING
                ---------------------------------------------------------- */}

            <h1
              className="
                mt-3
                max-w-[620px]
                text-[27px]
                font-semibold
                leading-[1.15]
                text-black

                sm:mt-4
                sm:text-[32px]

                md:text-[38px]

                lg:text-[42px]

                xl:text-[46px]
              "
            >
              {heading}

              {headingHighlight && (
                <>
                  {" "}
                  <span
                    style={{
                      color: accentColor,
                    }}
                  >
                    {headingHighlight}
                  </span>
                </>
              )}
            </h1>

            {/* ----------------------------------------------------------
                DESCRIPTION
                ---------------------------------------------------------- */}

            {subtext && (
              <p
                className="
                  mt-4
                  max-w-[560px]
                  text-[12px]
                  font-normal
                  leading-5
                  text-[#979797]

                  sm:text-[13px]
                  sm:leading-6

                  md:text-[14px]
                  md:leading-7

                  lg:text-[15px]
                  lg:leading-7

                  xl:text-[16px]
                  xl:leading-8
                "
              >
                {subtext}
              </p>
            )}

            {/* ----------------------------------------------------------
                BUTTONS
                ---------------------------------------------------------- */}

            {buttons.length > 0 && (
              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-3

                  sm:mt-6
                  sm:gap-4

                  md:mt-7
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

          {/* ============================================================
              RIGHT IMAGE SLIDER
              ============================================================ */}

          {slides.length > 0 && (
            <div
              className="
                relative
                z-20
                mt-2
                w-full

                sm:mt-4

                lg:mt-0
              "
            >
              <div
                className="
                  relative
                  w-full
                  overflow-hidden

                  h-[190px]

                  rounded-[18px]

                  sm:h-[230px]
                  sm:rounded-[24px]

                  md:h-[300px]

                  lg:h-[400px]
                  lg:rounded-[30px]

                  xl:h-[440px]

                  2xl:h-[480px]
                "
              >
                {/* ------------------------------------------------------
                    SLIDES
                    ------------------------------------------------------ */}

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
                        h-full
                        w-full
                        object-cover
                        transition-opacity
                        duration-1000

                        ${currentSlide === index ? "opacity-100" : "opacity-0"}
                      `}
                  />
                ))}

                {/* ------------------------------------------------------
                    GRADIENT OVERLAY
                    ------------------------------------------------------ */}

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

                {/* ------------------------------------------------------
                    SLIDE TEXT
                    ------------------------------------------------------ */}

                {activeSlide && (
                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      z-10
                      pr-4
                      text-white

                      sm:bottom-6
                      sm:left-6

                      md:bottom-8
                      md:left-8

                      lg:bottom-9
                      lg:left-9

                      xl:bottom-10
                      xl:left-10
                    "
                  >
                    <h3
                      className="
                        line-clamp-2
                        text-base
                        font-semibold
                        leading-tight

                        sm:text-lg

                        md:text-2xl

                        lg:text-3xl

                        xl:text-4xl
                      "
                    >
                      {activeSlide.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        line-clamp-2
                        max-w-[280px]
                        text-[10px]
                        leading-4
                        text-white/90

                        sm:mt-2
                        sm:max-w-[420px]
                        sm:text-xs
                        sm:leading-5

                        md:max-w-[520px]
                        md:text-sm
                        md:leading-6

                        lg:text-base
                        lg:leading-7
                      "
                    >
                      {activeSlide.description}
                    </p>
                  </div>
                )}

                {/* ------------------------------------------------------
                    SLIDE INDICATORS
                    ------------------------------------------------------ */}

                <div
                  className="
                    absolute
                    bottom-3
                    right-3
                    z-10
                    flex
                    gap-1.5

                    sm:bottom-5
                    sm:right-5
                    sm:gap-2
                  "
                >
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`
                          h-1.5
                          rounded-full
                          transition-all
                          duration-300

                          sm:h-2

                          ${
                            currentSlide === index
                              ? "w-6 bg-white sm:w-8"
                              : "w-1.5 bg-white/50 sm:w-2"
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
    </section>
  );
}
